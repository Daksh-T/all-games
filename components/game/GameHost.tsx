"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { computeStars, formatScore } from "@/lib/game-logic";
import { writeProgress } from "@/lib/progress";
import { ChapterWithGame } from "@/lib/types";
import { MechanicRenderer, RoundResult } from "@/components/game/mechanics";

type GameHostProps = {
  chapter: ChapterWithGame;
};

type RoundFeedback = {
  isCorrect: boolean;
  selectedAnswer: string;
  correctAnswer: string;
  explanation: string;
};

function deriveCorrectAnswer(round: Record<string, unknown>): string {
  if (typeof round.answer === "string") {
    return round.answer;
  }

  if (Array.isArray(round.answer)) {
    return round.answer.map(String).join(", ");
  }

  if (typeof round.isTrue === "boolean") {
    return round.isTrue ? "True" : "False";
  }

  if (Array.isArray(round.sequence)) {
    return (round.sequence as unknown[]).map(String).join(" -> ");
  }

  return "Review this item with your teacher.";
}

function buildFeedback(round: Record<string, unknown>, result: RoundResult): RoundFeedback {
  const selectedAnswer = result.selectedAnswer ?? "No answer captured";
  const correctAnswer = result.correctAnswer ?? deriveCorrectAnswer(round);

  if (result.explanation) {
    return {
      isCorrect: result.isCorrect,
      selectedAnswer,
      correctAnswer,
      explanation: result.explanation,
    };
  }

  return {
    isCorrect: result.isCorrect,
    selectedAnswer,
    correctAnswer,
    explanation: result.isCorrect
      ? "Great answer. Keep this pattern for the next one."
      : `Correct answer: ${correctAnswer}`,
  };
}

export function GameHost({ chapter }: GameHostProps) {
  const payload = chapter.gameConfig?.contentPayload;
  const rounds = useMemo(() => (Array.isArray(payload?.rounds) ? payload.rounds : []), [payload]);
  const total = rounds.length;
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [started, setStarted] = useState(false);
  const [finished, setFinished] = useState(false);
  const [secondsLeft, setSecondsLeft] = useState(chapter.gameConfig?.roundTimeSec ?? 60);
  const [roundFeedback, setRoundFeedback] = useState<RoundFeedback | null>(null);
  const persisted = useRef(false);
  const hapticTriggered = useRef(false);

  const currentRound = rounds[index] as Record<string, unknown> | undefined;
  const answeredCount = index + (roundFeedback ? 1 : 0);

  useEffect(() => {
    if (!started || finished || roundFeedback) {
      return;
    }

    const interval = setInterval(() => {
      setSecondsLeft((current) => {
        if (current <= 1) {
          setFinished(true);
          return 0;
        }

        return current - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [started, finished, roundFeedback]);

  useEffect(() => {
    if (!finished || persisted.current || total === 0) {
      return;
    }

    persisted.current = true;
    const stars = computeStars(score, total);

    writeProgress({
      chapterId: chapter.id,
      bestScore: score,
      stars,
      completedAt: new Date().toISOString(),
    });
  }, [finished, total, score, chapter.id]);

  useEffect(() => {
    if (!finished) {
      hapticTriggered.current = false;
      return;
    }

    if (hapticTriggered.current || total === 0) {
      return;
    }

    const passed = score >= Math.ceil(total * 0.7);
    if (!passed) {
      return;
    }

    if (typeof navigator !== "undefined" && "vibrate" in navigator) {
      navigator.vibrate(18);
    }

    hapticTriggered.current = true;
  }, [finished, score, total]);

  const handleRound = useCallback(
    (result: RoundResult) => {
      if (!currentRound || roundFeedback) {
        return;
      }

      if (result.isCorrect) {
        setScore((current) => current + 1);
      }

      setRoundFeedback(buildFeedback(currentRound, result));
    },
    [currentRound, roundFeedback]
  );

  function continueAfterFeedback() {
    const isLast = index >= total - 1;

    if (isLast) {
      setFinished(true);
      setRoundFeedback(null);
      return;
    }

    setIndex((current) => current + 1);
    setRoundFeedback(null);
  }

  function restart() {
    setIndex(0);
    setScore(0);
    setStarted(false);
    setFinished(false);
    setRoundFeedback(null);
    setSecondsLeft(chapter.gameConfig?.roundTimeSec ?? 60);
    persisted.current = false;
    hapticTriggered.current = false;
  }

  if (!chapter.gameConfig || !payload || total === 0) {
    return (
      <div className="rounded-3xl border border-amber-200 bg-amber-50 p-6 text-sm font-semibold text-amber-900">
        This chapter does not have a playable game yet.
      </div>
    );
  }

  if (!started) {
    return (
      <div className="game-panel space-y-4 rounded-3xl border border-sky-200 bg-white p-5 shadow-sm">
        <h2 className="text-xl font-black text-slate-900">{payload.title}</h2>
        <p className="text-sm text-slate-700">{payload.instructions}</p>
        <ul className="space-y-1 text-xs text-slate-600">
          <li>Rounds: {total}</li>
          <li>Timer: {chapter.gameConfig.roundTimeSec}s</li>
          <li>Win rule: {chapter.gameConfig.winRules}</li>
        </ul>
        <button
          className="lift-card w-full rounded-2xl bg-sky-600 px-4 py-3 text-sm font-bold text-white active:scale-[0.99]"
          onClick={() => setStarted(true)}
        >
          Start Game
        </button>
      </div>
    );
  }

  if (finished) {
    const stars = computeStars(score, total);
    const passed = score >= Math.ceil(total * 0.7);

    return (
      <div className="game-panel space-y-4 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
        <h2 className="text-xl font-black text-slate-900">Round Complete</h2>
        <p className="text-sm font-semibold text-slate-700">Score: {formatScore(score, total)}</p>
        <p className="text-sm text-slate-700">Stars earned: {stars}</p>
        {passed ? (
          <div className="hooray-burst rounded-2xl bg-emerald-100 p-4 text-center">
            <p className="text-lg font-black text-emerald-900">Hooray! You nailed this round.</p>
          </div>
        ) : null}
        <p className="rounded-2xl bg-slate-50 p-3 text-sm text-slate-700">
          {passed ? payload.successMessage : payload.failureMessage}
        </p>
        <button
          className="lift-card w-full rounded-2xl bg-slate-900 px-4 py-3 text-sm font-bold text-white active:scale-[0.99]"
          onClick={restart}
        >
          Play Again
        </button>
      </div>
    );
  }

  if (!currentRound) {
    return null;
  }

  return (
    <div className="game-shell space-y-4 rounded-3xl border border-slate-200 bg-gradient-to-b from-white to-sky-50 p-5 shadow-sm">
      <div className="flex items-center justify-between text-xs font-semibold text-slate-600">
        <span>
          Round {index + 1}/{total}
        </span>
        <span>Score: {score}</span>
        <span className="timer-chip rounded-full bg-white px-2 py-0.5 shadow-sm">{secondsLeft}s</span>
      </div>
      <div className="flex items-center gap-1">
        {Array.from({ length: total }).map((_, idx) => {
          const filled = idx < score;
          const seen = idx < answeredCount;
          return (
            <span
              key={`${chapter.id}-dot-${idx}`}
              className={`inline-flex h-2.5 w-2.5 rounded-full ${
                filled ? "progress-pulse bg-emerald-500" : seen ? "bg-amber-400" : "bg-slate-200"
              }`}
            />
          );
        })}
      </div>

      {roundFeedback ? (
        <div className="answer-reveal space-y-3 rounded-2xl border border-slate-200 bg-slate-50 p-4">
          <p className={`text-sm font-black ${roundFeedback.isCorrect ? "text-emerald-700" : "text-rose-700"}`}>
            {roundFeedback.isCorrect ? "Correct!" : "Not quite"}
          </p>
          {!roundFeedback.isCorrect ? (
            <p className="text-xs text-slate-700">
              <span className="font-bold">Your answer:</span> {roundFeedback.selectedAnswer}
            </p>
          ) : null}
          <p className="text-xs text-slate-700">
            <span className="font-bold">Correct answer:</span> {roundFeedback.correctAnswer}
          </p>
          <p className="rounded-xl bg-white p-3 text-sm text-slate-700">{roundFeedback.explanation}</p>
          <button
            className="lift-card w-full rounded-xl bg-slate-900 px-3 py-2 text-sm font-bold text-white active:scale-[0.99]"
            onClick={continueAfterFeedback}
          >
            {index >= total - 1 ? "See Results" : "Next Question"}
          </button>
        </div>
      ) : (
        <MechanicRenderer
          key={`${chapter.id}-${index}`}
          mechanicType={chapter.gameConfig.mechanicType}
          round={currentRound}
          onComplete={handleRound}
        />
      )}
    </div>
  );
}
