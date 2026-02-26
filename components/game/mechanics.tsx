"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { MechanicType } from "@/lib/types";

export type RoundResult = {
  isCorrect: boolean;
  selectedAnswer?: string;
  correctAnswer?: string;
  explanation?: string;
};

type MechanicProps = {
  mechanicType: MechanicType;
  round: Record<string, unknown>;
  onComplete: (result: RoundResult) => void;
};

function stableHash(input: string): number {
  let hash = 2166136261;
  for (let index = 0; index < input.length; index += 1) {
    hash ^= input.charCodeAt(index);
    hash = Math.imul(hash, 16777619);
  }
  return hash >>> 0;
}

function shuffleBySeed<T>(items: T[], seed: string, toKey?: (item: T, index: number) => string): T[] {
  return [...items]
    .map((item, index) => ({
      item,
      index,
      weight: stableHash(`${seed}:${toKey ? toKey(item, index) : String(item)}:${index}`),
    }))
    .sort((left, right) => left.weight - right.weight || left.index - right.index)
    .map(({ item }) => item);
}

function buildSessionSeed(base: string): string {
  if (typeof globalThis.crypto !== "undefined" && typeof globalThis.crypto.getRandomValues === "function") {
    const values = new Uint32Array(1);
    globalThis.crypto.getRandomValues(values);
    return `${base}:${values[0].toString(36)}`;
  }

  return base;
}

function useSessionSeed(base: string): string {
  const [seed] = useState(() => buildSessionSeed(base));
  return seed;
}

function OptionButtons({
  options,
  shuffleSeed,
  onSelect,
}: {
  options: string[];
  shuffleSeed?: string;
  onSelect: (value: string) => void;
}) {
  const optionSeed = useSessionSeed(shuffleSeed ?? options.join("|"));
  const orderedOptions = useMemo(
    () => (options.length > 1 ? shuffleBySeed(options, optionSeed) : options),
    [options, optionSeed]
  );

  return (
    <div className="grid gap-3">
      {orderedOptions.map((option, index) => (
        <button
          key={`${option}-${index}`}
          className="lift-card soft-pop rounded-2xl border border-sky-200 bg-white px-4 py-3 text-left text-sm font-semibold text-slate-800 shadow-sm transition hover:bg-sky-50 active:scale-[0.99]"
          onClick={() => onSelect(option)}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

function TapCorrect({ round, onComplete }: Omit<MechanicProps, "mechanicType">) {
  const prompt = String(round.prompt ?? "Choose the best answer");
  const options = ((round.options as string[]) ?? []).map(String);
  const answer = String(round.answer ?? "");
  const explanation = typeof round.explanation === "string" ? round.explanation : undefined;

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-bold text-slate-900">{prompt}</h3>
      <OptionButtons
        options={options}
        shuffleSeed={`${prompt}|${answer}`}
        onSelect={(value) =>
          onComplete({
            isCorrect: value === answer,
            selectedAnswer: value,
            correctAnswer: answer,
            explanation,
          })
        }
      />
    </div>
  );
}

function SwipeTrueFalse({ round, onComplete }: Omit<MechanicProps, "mechanicType">) {
  const statement = String(round.statement ?? "");
  const expected = Boolean(round.isTrue);
  const explanation = typeof round.explanation === "string" ? round.explanation : undefined;

  return (
    <div className="space-y-6">
      <p className="rounded-2xl bg-sky-50 p-4 text-base font-semibold text-slate-900">{statement}</p>
      <div className="grid grid-cols-2 gap-3">
        <button
          className="lift-card soft-pop rounded-2xl bg-emerald-500 px-4 py-4 text-base font-bold text-white active:scale-[0.99]"
          onClick={() =>
            onComplete({
              isCorrect: expected,
              selectedAnswer: "True",
              correctAnswer: expected ? "True" : "False",
              explanation,
            })
          }
        >
          True
        </button>
        <button
          className="lift-card soft-pop rounded-2xl bg-rose-500 px-4 py-4 text-base font-bold text-white active:scale-[0.99]"
          onClick={() =>
            onComplete({
              isCorrect: !expected,
              selectedAnswer: "False",
              correctAnswer: expected ? "True" : "False",
              explanation,
            })
          }
        >
          False
        </button>
      </div>
    </div>
  );
}

function CardFlipMatch({ round, onComplete }: Omit<MechanicProps, "mechanicType">) {
  const pairs = useMemo(
    () => (((round.pairs as [string, string][]) ?? []).map((pair) => [String(pair[0]), String(pair[1])]) as [string, string][]),
    [round]
  );
  const maxMistakes = typeof round.maxMistakes === "number" ? round.maxMistakes : 6;
  const explanation = typeof round.explanation === "string" ? round.explanation : undefined;
  const sessionSeed = useSessionSeed(pairs.map((pair) => pair.join("~")).join("|"));
  const cards = useMemo(() => {
    const deck = pairs.flatMap(([left, right], pairId) => [
      { id: `${pairId}-l`, pairId, label: left },
      { id: `${pairId}-r`, pairId, label: right },
    ]);
    return shuffleBySeed(deck, sessionSeed, (item) => item.id);
  }, [pairs, sessionSeed]);
  const [flipped, setFlipped] = useState<string[]>([]);
  const [matchedPairs, setMatchedPairs] = useState<number[]>([]);
  const [mistakes, setMistakes] = useState(0);
  const [locked, setLocked] = useState(false);
  const resolvedRef = useRef(false);

  function getCard(id: string) {
    return cards.find((card) => card.id === id);
  }

  function completeRound(isCorrect: boolean) {
    if (resolvedRef.current) {
      return;
    }

    resolvedRef.current = true;
    onComplete({
      isCorrect,
      selectedAnswer: isCorrect ? `Matched ${pairs.length} pairs` : `${mistakes + 1} mismatches`,
      correctAnswer: `Match all ${pairs.length} pairs`,
      explanation:
        explanation ??
        (isCorrect
          ? "Nice matching! You connected all pairs."
          : "Too many mismatches this round. Try again and match terms more carefully."),
    });
  }

  function handleCardPress(cardId: string) {
    if (locked || resolvedRef.current || flipped.includes(cardId)) {
      return;
    }

    const card = getCard(cardId);
    if (!card || matchedPairs.includes(card.pairId)) {
      return;
    }

    const nextFlipped = [...flipped, cardId];
    setFlipped(nextFlipped);

    if (nextFlipped.length < 2) {
      return;
    }

    const first = getCard(nextFlipped[0]);
    const second = getCard(nextFlipped[1]);
    if (!first || !second) {
      setFlipped([]);
      return;
    }

    if (first.pairId === second.pairId) {
      const nextMatched = [...matchedPairs, first.pairId];
      setMatchedPairs(nextMatched);
      setTimeout(() => {
        setFlipped([]);
        if (nextMatched.length === pairs.length && pairs.length > 0) {
          completeRound(true);
        }
      }, 220);
      return;
    }

    setLocked(true);
    setTimeout(() => {
      setFlipped([]);
      setLocked(false);
      setMistakes((prev) => {
        const next = prev + 1;
        if (next >= maxMistakes) {
          completeRound(false);
        }
        return next;
      });
    }, 700);
  }

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between rounded-xl bg-slate-50 p-2 text-xs font-bold text-slate-600">
        <span>Pairs: {matchedPairs.length}/{pairs.length}</span>
        <span>Mistakes: {mistakes}/{maxMistakes}</span>
      </div>
      <p className="text-sm font-semibold text-slate-600">Flip cards and match each term with its partner.</p>
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
        {cards.map((card) => {
          const isMatched = matchedPairs.includes(card.pairId);
          const isFlipped = flipped.includes(card.id);
          return (
            <button
              key={card.id}
              onClick={() => handleCardPress(card.id)}
              className={`lift-card soft-pop min-h-20 rounded-xl border px-2 py-2 text-sm font-semibold transition active:scale-[0.99] ${
                isMatched
                  ? "border-emerald-300 bg-emerald-100 text-emerald-900"
                  : isFlipped
                    ? "border-sky-300 bg-sky-100 text-slate-900"
                    : "border-slate-200 bg-white text-slate-500"
              }`}
            >
              {isMatched || isFlipped ? card.label : "?"}
            </button>
          );
        })}
      </div>
    </div>
  );
}

function SentenceSort({ round, onComplete }: Omit<MechanicProps, "mechanicType">) {
  const prompt = String(round.prompt ?? "Build the sentence");
  const words = ((round.words as string[]) ?? []).map(String);
  const sessionSeed = useSessionSeed(`${prompt}|${words.join("|")}`);
  const displayWords = useMemo(
    () => (words.length > 1 ? shuffleBySeed(words, sessionSeed) : words),
    [words, sessionSeed]
  );
  const answer = ((round.answer as string[]) ?? []).map(String);
  const [picked, setPicked] = useState<string[]>([]);
  const explanation = typeof round.explanation === "string" ? round.explanation : undefined;

  function addWord(word: string) {
    if (picked.length >= answer.length) {
      return;
    }
    setPicked((current) => [...current, word]);
  }

  function clear() {
    setPicked([]);
  }

  useEffect(() => {
    if (picked.length !== answer.length) {
      return;
    }

    onComplete({
      isCorrect: picked.join(" ") === answer.join(" "),
      selectedAnswer: picked.join(" "),
      correctAnswer: answer.join(" "),
      explanation,
    });
  }, [picked, answer, onComplete, explanation]);

  return (
    <div className="space-y-3">
      <h3 className="text-base font-bold text-slate-900">{prompt}</h3>
      <div className="min-h-16 rounded-xl border border-slate-200 bg-slate-50 p-3 text-sm font-semibold text-slate-700">
        {picked.join(" ") || "Tap words below to build your sentence"}
      </div>
      <div className="flex flex-wrap gap-2">
        {displayWords.map((word, index) => (
          <button
            key={`${word}-${index}`}
            className="lift-card soft-pop rounded-full border border-sky-200 bg-white px-3 py-1.5 text-sm font-semibold text-slate-800 active:scale-[0.99]"
            onClick={() => addWord(word)}
          >
            {word}
          </button>
        ))}
      </div>
      <button className="text-xs font-semibold text-slate-500 underline" onClick={clear}>
        Reset sentence
      </button>
    </div>
  );
}

function LetterTileSpell({ round, onComplete }: Omit<MechanicProps, "mechanicType">) {
  const prompt = String(round.prompt ?? "Spell the word");
  const letters = ((round.letters as string[]) ?? []).map((item) => item.toUpperCase());
  const sessionSeed = useSessionSeed(`${prompt}|${letters.join("|")}`);
  const displayLetters = useMemo(
    () => (letters.length > 1 ? shuffleBySeed(letters, sessionSeed) : letters),
    [letters, sessionSeed]
  );
  const answer = String(round.answer ?? "").toUpperCase();
  const [picked, setPicked] = useState<string[]>([]);
  const explanation = typeof round.explanation === "string" ? round.explanation : undefined;

  useEffect(() => {
    if (picked.length !== answer.length) {
      return;
    }

    onComplete({
      isCorrect: picked.join("") === answer,
      selectedAnswer: picked.join(""),
      correctAnswer: answer,
      explanation,
    });
  }, [picked, answer, onComplete, explanation]);

  return (
    <div className="space-y-3">
      <h3 className="text-base font-bold text-slate-900">Spell: {prompt}</h3>
      <div className="rounded-xl border border-slate-200 bg-slate-50 p-3 text-xl font-black tracking-[0.35em] text-slate-800">
        {picked.join("") || "_".repeat(answer.length)}
      </div>
      <div className="grid grid-cols-5 gap-2">
        {displayLetters.map((letter, idx) => (
          <button
            key={`${letter}-${idx}`}
            className="lift-card soft-pop rounded-xl bg-indigo-100 px-2 py-3 text-base font-bold text-indigo-900 active:scale-[0.99]"
            onClick={() => setPicked((current) => [...current, letter])}
          >
            {letter}
          </button>
        ))}
      </div>
      <button className="text-xs font-semibold text-slate-500 underline" onClick={() => setPicked([])}>
        Reset spelling
      </button>
    </div>
  );
}

function DragWordBank({ round, onComplete }: Omit<MechanicProps, "mechanicType">) {
  const sentence = String(round.sentence ?? "");
  const bank = ((round.bank as string[]) ?? []).map(String);
  const sessionSeed = useSessionSeed(`${sentence}|${bank.join("|")}`);
  const displayBank = useMemo(
    () => (bank.length > 1 ? shuffleBySeed(bank, sessionSeed) : bank),
    [bank, sessionSeed]
  );
  const answer = ((round.answer as string[]) ?? []).map(String);
  const blanks = answer.length;
  const [picked, setPicked] = useState<string[]>([]);
  const explanation = typeof round.explanation === "string" ? round.explanation : undefined;

  useEffect(() => {
    if (picked.length !== blanks) {
      return;
    }

    onComplete({
      isCorrect: picked.join("|") === answer.join("|"),
      selectedAnswer: picked.join(", "),
      correctAnswer: answer.join(", "),
      explanation,
    });
  }, [picked, answer, blanks, onComplete, explanation]);

  return (
    <div className="space-y-4">
      <p className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm font-semibold text-slate-900">{sentence}</p>
      <div className="grid grid-cols-2 gap-2">
        {displayBank.map((word, index) => (
          <button
            key={`${word}-${index}`}
            className="lift-card soft-pop rounded-xl border border-teal-200 bg-white px-3 py-2 text-sm font-semibold text-slate-800 active:scale-[0.99]"
            onClick={() => setPicked((current) => (current.length < blanks ? [...current, word] : current))}
          >
            {word}
          </button>
        ))}
      </div>
      <div className="rounded-xl bg-teal-50 p-3 text-sm font-semibold text-teal-900">
        Your blanks: {picked.join(" / ") || "(none yet)"}
      </div>
      <button className="text-xs font-semibold text-slate-500 underline" onClick={() => setPicked([])}>
        Reset blanks
      </button>
    </div>
  );
}

function DialogGap({ round, onComplete }: Omit<MechanicProps, "mechanicType">) {
  const dialogue = String(round.dialogue ?? "");
  const options = ((round.options as string[]) ?? []).map(String);
  const answer = String(round.answer ?? "");
  const explanation = typeof round.explanation === "string" ? round.explanation : undefined;

  return (
    <div className="space-y-4">
      <p className="rounded-xl bg-violet-50 p-4 text-sm font-semibold text-violet-950">{dialogue}</p>
      <OptionButtons
        options={options}
        shuffleSeed={`${dialogue}|${answer}`}
        onSelect={(value) =>
          onComplete({
            isCorrect: value === answer,
            selectedAnswer: value,
            correctAnswer: answer,
            explanation,
          })
        }
      />
    </div>
  );
}

function CategorySort({ round, onComplete }: Omit<MechanicProps, "mechanicType">) {
  const categories = useMemo(() => ((round.categories as string[]) ?? []).map(String), [round]);
  const items = useMemo(
    () => (((round.items as { label: string; category: string }[]) ?? []).map((item) => ({ label: String(item.label), category: String(item.category) }))),
    [round]
  );
  const sessionSeed = useSessionSeed(
    `${categories.join("|")}|${items
      .map((item) => `${item.label}->${item.category}`)
      .join("|")}`
  );
  const displayedItems = useMemo(
    () => (items.length > 1 ? shuffleBySeed(items, `${sessionSeed}:items`, (item) => item.label) : items),
    [items, sessionSeed]
  );
  const displayedCategories = useMemo(
    () => (categories.length > 1 ? shuffleBySeed(categories, `${sessionSeed}:categories`) : categories),
    [categories, sessionSeed]
  );
  const [selectedItem, setSelectedItem] = useState<string | null>(null);
  const [assignments, setAssignments] = useState<Record<string, string>>({});
  const explanation = typeof round.explanation === "string" ? round.explanation : undefined;

  useEffect(() => {
    if (Object.keys(assignments).length !== items.length || items.length === 0) {
      return;
    }

    const correct = items.every((item) => assignments[item.label] === item.category);
    onComplete({
      isCorrect: correct,
      selectedAnswer: Object.entries(assignments)
        .map(([item, category]) => `${item} -> ${category}`)
        .join("; "),
      correctAnswer: "Assign each item to the matching category.",
      explanation,
    });
  }, [assignments, items, onComplete, explanation]);

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-2">
        {displayedItems.map((item) => (
          <button
            key={item.label}
            onClick={() => setSelectedItem(item.label)}
            className={`lift-card soft-pop rounded-xl px-3 py-2 text-sm font-semibold active:scale-[0.99] ${
              selectedItem === item.label ? "bg-sky-200 text-sky-900" : "bg-slate-100 text-slate-700"
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 gap-2">
        {displayedCategories.map((category) => (
          <button
            key={category}
            className="lift-card soft-pop rounded-xl border border-amber-300 bg-amber-100 px-3 py-2 text-sm font-bold text-amber-900 active:scale-[0.99]"
            onClick={() => {
              if (!selectedItem) {
                return;
              }

              setAssignments((current) => ({
                ...current,
                [selectedItem]: category,
              }));
            }}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="rounded-xl border border-slate-200 bg-white p-3 text-xs text-slate-600">
        {Object.entries(assignments).map(([item, category]) => (
          <p key={item}>
            {item} {"->"} {category}
          </p>
        ))}
      </div>
    </div>
  );
}

function ImageWordMatch({ round, onComplete }: Omit<MechanicProps, "mechanicType">) {
  const emoji = String(round.emoji ?? "\ud83d\uddbc\ufe0f");
  const options = ((round.options as string[]) ?? []).map(String);
  const answer = String(round.answer ?? "");
  const explanation = typeof round.explanation === "string" ? round.explanation : undefined;

  return (
    <div className="space-y-4 text-center">
      <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-amber-100 text-4xl">{emoji}</div>
      <OptionButtons
        options={options}
        shuffleSeed={`${emoji}|${answer}`}
        onSelect={(value) =>
          onComplete({
            isCorrect: value === answer,
            selectedAnswer: value,
            correctAnswer: answer,
            explanation,
          })
        }
      />
    </div>
  );
}

function OddballOut({ round, onComplete }: Omit<MechanicProps, "mechanicType">) {
  const words = ((round.set as string[]) ?? []).map(String);
  const answer = String(round.answer ?? "");
  const sessionSeed = useSessionSeed(`${answer}|${words.join("|")}`);
  const displayWords = useMemo(
    () => (words.length > 1 ? shuffleBySeed(words, sessionSeed) : words),
    [words, sessionSeed]
  );
  const explanation = typeof round.explanation === "string" ? round.explanation : undefined;

  return (
    <div className="space-y-3">
      <h3 className="text-base font-bold text-slate-900">Tap the odd word out.</h3>
      <div className="grid grid-cols-2 gap-2">
        {displayWords.map((word, index) => (
          <button
            key={`${word}-${index}`}
            className="lift-card soft-pop rounded-xl border border-rose-200 bg-white px-3 py-2 text-sm font-semibold text-slate-800 active:scale-[0.99]"
            onClick={() =>
              onComplete({
                isCorrect: word === answer,
                selectedAnswer: word,
                correctAnswer: answer,
                explanation,
              })
            }
          >
            {word}
          </button>
        ))}
      </div>
    </div>
  );
}

function MemoryPath({ round, onComplete }: Omit<MechanicProps, "mechanicType">) {
  const sequence = useMemo(() => ((round.sequence as string[]) ?? []).map(String), [round]);
  const [showSequence, setShowSequence] = useState(true);
  const [picked, setPicked] = useState<string[]>([]);
  const sessionSeed = useSessionSeed(sequence.join("|"));
  const shuffled = useMemo(
    () => (sequence.length > 1 ? shuffleBySeed(sequence, sessionSeed) : sequence),
    [sequence, sessionSeed]
  );
  const explanation = typeof round.explanation === "string" ? round.explanation : undefined;

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowSequence(false);
    }, 3500);

    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    if (picked.length !== sequence.length || sequence.length === 0) {
      return;
    }

    onComplete({
      isCorrect: picked.join("|") === sequence.join("|"),
      selectedAnswer: picked.join(" -> "),
      correctAnswer: sequence.join(" -> "),
      explanation,
    });
  }, [picked, sequence, onComplete, explanation]);

  if (showSequence) {
    return (
      <div className="space-y-3 rounded-xl bg-slate-50 p-4">
        <p className="text-sm font-semibold text-slate-600">Memorize this order:</p>
        {sequence.map((item, idx) => (
          <p key={item} className="text-sm font-bold text-slate-900">
            {idx + 1}. {item}
          </p>
        ))}
      </div>
    );
  }

  return (
    <div className="space-y-3">
      <p className="text-sm font-semibold text-slate-600">Now tap in the same order.</p>
      <div className="grid gap-2">
        {shuffled.map((item, idx) => (
          <button
            key={`${item}-${idx}`}
            className="lift-card soft-pop rounded-xl border border-slate-200 bg-white px-3 py-2 text-left text-sm font-semibold active:scale-[0.99]"
            onClick={() => setPicked((current) => [...current, item])}
          >
            {item}
          </button>
        ))}
      </div>
      <p className="rounded-xl bg-slate-100 p-2 text-xs text-slate-700">Your order: {picked.join(" -> ") || "(none yet)"}</p>
    </div>
  );
}

export function MechanicRenderer({ mechanicType, round, onComplete }: MechanicProps) {
  switch (mechanicType) {
    case "TAP_CORRECT":
      return <TapCorrect round={round} onComplete={onComplete} />;
    case "SWIPE_TRUE_FALSE":
      return <SwipeTrueFalse round={round} onComplete={onComplete} />;
    case "CARD_FLIP_MATCH":
      return <CardFlipMatch round={round} onComplete={onComplete} />;
    case "SENTENCE_SORT":
      return <SentenceSort round={round} onComplete={onComplete} />;
    case "SPEED_MULTIPLE_CHOICE":
      return <TapCorrect round={round} onComplete={onComplete} />;
    case "LETTER_TILE_SPELL":
      return <LetterTileSpell round={round} onComplete={onComplete} />;
    case "DRAG_WORD_BANK":
      return <DragWordBank round={round} onComplete={onComplete} />;
    case "DIALOG_GAP":
      return <DialogGap round={round} onComplete={onComplete} />;
    case "CATEGORY_SORT":
      return <CategorySort round={round} onComplete={onComplete} />;
    case "IMAGE_WORD_MATCH":
      return <ImageWordMatch round={round} onComplete={onComplete} />;
    case "ODDBALL_OUT":
      return <OddballOut round={round} onComplete={onComplete} />;
    case "MEMORY_PATH":
      return <MemoryPath round={round} onComplete={onComplete} />;
    default:
      return <TapCorrect round={round} onComplete={onComplete} />;
  }
}
