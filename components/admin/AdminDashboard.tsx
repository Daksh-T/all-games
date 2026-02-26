"use client";

import { FormEvent, useEffect, useMemo, useState } from "react";
import { ChapterWithGame, GamePayload, MECHANIC_TYPES, MechanicType } from "@/lib/types";

type AdminDashboardProps = {
  initialBook: string;
};

type RoundRecord = Record<string, unknown>;

const BOOK_OPTIONS = ["all", "1l", "2l", "3r", "4l", "5l"] as const;

const ROUND_FIELD_TEMPLATES: Array<{ key: string; label: string; value: unknown }> = [
  { key: "prompt", label: "Prompt", value: "" },
  { key: "dialogue", label: "Dialogue", value: "" },
  { key: "sentence", label: "Sentence", value: "" },
  { key: "statement", label: "Statement", value: "" },
  { key: "emoji", label: "Emoji", value: "" },
  { key: "options", label: "Options", value: [""] },
  { key: "answer", label: "Answer", value: "" },
  { key: "explanation", label: "Explanation", value: "" },
  { key: "words", label: "Words", value: [""] },
  { key: "bank", label: "Word Bank", value: [""] },
  { key: "sequence", label: "Sequence", value: [""] },
  { key: "set", label: "Set", value: [""] },
  { key: "categories", label: "Categories", value: [""] },
  { key: "items", label: "Items", value: [{ label: "item", category: "category" }] },
  { key: "pairs", label: "Pairs", value: [["left", "right"]] },
  { key: "isTrue", label: "True/False", value: true },
  { key: "maxMistakes", label: "Max Mistakes", value: 5 },
];

function titleCaseMechanic(value: string): string {
  return value
    .toLowerCase()
    .split("_")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

function toPrettyLabel(key: string): string {
  return key
    .replace(/([A-Z])/g, " $1")
    .replace(/_/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .replace(/^./, (first) => first.toUpperCase());
}

function splitLines(value: string): string[] {
  return value
    .split("\n")
    .map((line) => line.trim())
    .filter((line) => line.length > 0);
}

function encodeLines(values: string[]): string {
  return values.join("\n");
}

function isStringArray(value: unknown): value is string[] {
  return Array.isArray(value) && value.every((item) => typeof item === "string");
}

function isPairArray(value: unknown): value is [string, string][] {
  return (
    Array.isArray(value) &&
    value.every(
      (item) =>
        Array.isArray(item) &&
        item.length === 2 &&
        typeof item[0] === "string" &&
        typeof item[1] === "string"
    )
  );
}

function isLabelCategoryArray(value: unknown): value is Array<{ label: string; category: string }> {
  return (
    Array.isArray(value) &&
    value.every(
      (item) =>
        typeof item === "object" &&
        item !== null &&
        typeof (item as { label?: unknown }).label === "string" &&
        typeof (item as { category?: unknown }).category === "string"
    )
  );
}

function parsePairLines(value: string): [string, string][] {
  return splitLines(value)
    .map((line) => line.split("=>"))
    .map((parts) => [parts[0]?.trim() ?? "", parts.slice(1).join("=>").trim()])
    .filter((pair) => pair[0] && pair[1]) as [string, string][];
}

function encodePairLines(pairs: [string, string][]): string {
  return pairs.map((pair) => `${pair[0]} => ${pair[1]}`).join("\n");
}

function parseItemLines(value: string): Array<{ label: string; category: string }> {
  return splitLines(value)
    .map((line) => line.split("=>"))
    .map((parts) => ({
      label: parts[0]?.trim() ?? "",
      category: parts.slice(1).join("=>").trim(),
    }))
    .filter((item) => item.label && item.category);
}

function encodeItemLines(items: Array<{ label: string; category: string }>): string {
  return items.map((item) => `${item.label} => ${item.category}`).join("\n");
}

function createDefaultRoundForMechanic(mechanicType: MechanicType): RoundRecord {
  switch (mechanicType) {
    case "SWIPE_TRUE_FALSE":
      return { statement: "", isTrue: true, explanation: "" };
    case "CARD_FLIP_MATCH":
      return { pairs: [["left", "right"]], maxMistakes: 5, explanation: "" };
    case "SENTENCE_SORT":
      return { prompt: "", words: [""], answer: [""], explanation: "" };
    case "LETTER_TILE_SPELL":
      return { prompt: "", letters: [""], answer: "", explanation: "" };
    case "DRAG_WORD_BANK":
      return { sentence: "", bank: [""], answer: [""], explanation: "" };
    case "DIALOG_GAP":
      return { dialogue: "", options: [""], answer: "", explanation: "" };
    case "CATEGORY_SORT":
      return { categories: [""], items: [{ label: "", category: "" }], explanation: "" };
    case "IMAGE_WORD_MATCH":
      return { emoji: "", options: [""], answer: "", explanation: "" };
    case "ODDBALL_OUT":
      return { set: [""], answer: "", explanation: "" };
    case "MEMORY_PATH":
      return { sequence: [""], explanation: "" };
    default:
      return { prompt: "", options: [""], answer: "", explanation: "" };
  }
}

function createDefaultPayload(mechanicType: MechanicType): GamePayload {
  return {
    title: "New Game",
    instructions: "Edit these instructions.",
    successMessage: "Nice work!",
    failureMessage: "Try again.",
    rounds: [createDefaultRoundForMechanic(mechanicType)],
  };
}

function normalizePayload(value: unknown, mechanicType: MechanicType): GamePayload {
  const payload = typeof value === "object" && value !== null ? (value as Record<string, unknown>) : {};
  const rounds = Array.isArray(payload.rounds)
    ? payload.rounds
        .filter((round) => typeof round === "object" && round !== null)
        .map((round) => ({ ...(round as Record<string, unknown>) }))
    : [createDefaultRoundForMechanic(mechanicType)];

  return {
    title: typeof payload.title === "string" && payload.title.trim() ? payload.title : "Untitled Game",
    instructions:
      typeof payload.instructions === "string" && payload.instructions.trim()
        ? payload.instructions
        : "Add simple instructions for students.",
    successMessage:
      typeof payload.successMessage === "string" && payload.successMessage.trim()
        ? payload.successMessage
        : "Great work!",
    failureMessage:
      typeof payload.failureMessage === "string" && payload.failureMessage.trim()
        ? payload.failureMessage
        : "Try again and focus on the chapter target.",
    rounds: rounds.length > 0 ? rounds : [createDefaultRoundForMechanic(mechanicType)],
  };
}

export function AdminDashboard({ initialBook }: AdminDashboardProps) {
  const [bookCode, setBookCode] = useState(initialBook);
  const [chapters, setChapters] = useState<ChapterWithGame[]>([]);
  const [loading, setLoading] = useState(true);
  const [savingId, setSavingId] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);
  const [payloadByChapter, setPayloadByChapter] = useState<Record<string, GamePayload>>({});
  const [rawModeByChapter, setRawModeByChapter] = useState<Record<string, boolean>>({});
  const [rawTextByChapter, setRawTextByChapter] = useState<Record<string, string>>({});
  const [mechanicByChapter, setMechanicByChapter] = useState<Record<string, MechanicType>>({});

  async function loadChapters(code: string) {
    setLoading(true);
    const query = code && code !== "all" ? `?book=${code}` : "";
    const response = await fetch(`/api/admin/chapters${query}`);
    if (!response.ok) {
      setChapters([]);
      setLoading(false);
      return;
    }

    const data = (await response.json()) as { chapters: ChapterWithGame[] };
    setChapters(data.chapters);

    const payloadDrafts: Record<string, GamePayload> = {};
    const rawDrafts: Record<string, string> = {};
    const mechanicDrafts: Record<string, MechanicType> = {};

    for (const chapter of data.chapters) {
      const mechanic = (chapter.gameConfig?.mechanicType ?? "TAP_CORRECT") as MechanicType;
      mechanicDrafts[chapter.id] = mechanic;
      payloadDrafts[chapter.id] = normalizePayload(chapter.gameConfig?.contentPayload, mechanic);
      rawDrafts[chapter.id] = JSON.stringify(payloadDrafts[chapter.id], null, 2);
    }

    setPayloadByChapter(payloadDrafts);
    setRawTextByChapter(rawDrafts);
    setMechanicByChapter(mechanicDrafts);
    setRawModeByChapter({});
    setLoading(false);
  }

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    loadChapters(bookCode).catch(() => setLoading(false));
  }, [bookCode]);

  async function logout() {
    await fetch("/api/admin/logout", { method: "POST" });
    window.location.href = "/admin/login";
  }

  const grouped = useMemo(() => {
    return chapters.reduce<Record<string, ChapterWithGame[]>>((acc, chapter) => {
      acc[chapter.bookId] = acc[chapter.bookId] ?? [];
      acc[chapter.bookId].push(chapter);
      return acc;
    }, {});
  }, [chapters]);

  function patchPayload(chapterId: string, updater: (payload: GamePayload) => GamePayload) {
    setPayloadByChapter((current) => {
      const mechanic = mechanicByChapter[chapterId] ?? "TAP_CORRECT";
      const base = current[chapterId] ?? createDefaultPayload(mechanic);
      return {
        ...current,
        [chapterId]: updater(base),
      };
    });
  }

  function patchRoundField(chapterId: string, roundIndex: number, key: string, value: unknown) {
    patchPayload(chapterId, (payload) => {
      const rounds = [...payload.rounds] as RoundRecord[];
      const round = { ...(rounds[roundIndex] as RoundRecord | undefined) };
      round[key] = value;
      rounds[roundIndex] = round;
      return { ...payload, rounds };
    });
  }

  function removeRoundField(chapterId: string, roundIndex: number, key: string) {
    patchPayload(chapterId, (payload) => {
      const rounds = [...payload.rounds] as RoundRecord[];
      const round = { ...(rounds[roundIndex] as RoundRecord | undefined) };
      delete round[key];
      rounds[roundIndex] = round;
      return { ...payload, rounds };
    });
  }

  function addRoundField(chapterId: string, roundIndex: number, key: string, value: unknown) {
    patchPayload(chapterId, (payload) => {
      const rounds = [...payload.rounds] as RoundRecord[];
      const round = { ...(rounds[roundIndex] as RoundRecord | undefined) };
      if (!(key in round)) {
        round[key] = value;
      }
      rounds[roundIndex] = round;
      return { ...payload, rounds };
    });
  }

  function addRound(chapterId: string) {
    const mechanic = mechanicByChapter[chapterId] ?? "TAP_CORRECT";
    patchPayload(chapterId, (payload) => ({
      ...payload,
      rounds: [...payload.rounds, createDefaultRoundForMechanic(mechanic)],
    }));
  }

  function removeRound(chapterId: string, roundIndex: number) {
    patchPayload(chapterId, (payload) => {
      if (payload.rounds.length <= 1) {
        return payload;
      }
      return {
        ...payload,
        rounds: payload.rounds.filter((_, index) => index !== roundIndex),
      };
    });
  }

  function moveRound(chapterId: string, fromIndex: number, toIndex: number) {
    patchPayload(chapterId, (payload) => {
      if (toIndex < 0 || toIndex >= payload.rounds.length) {
        return payload;
      }
      const rounds = [...payload.rounds];
      const [picked] = rounds.splice(fromIndex, 1);
      rounds.splice(toIndex, 0, picked);
      return { ...payload, rounds };
    });
  }

  function toggleRawMode(chapterId: string) {
    setRawModeByChapter((current) => {
      const next = !current[chapterId];
      if (next) {
        const payload = payloadByChapter[chapterId];
        if (payload) {
          setRawTextByChapter((raw) => ({
            ...raw,
            [chapterId]: JSON.stringify(payload, null, 2),
          }));
        }
      }
      return {
        ...current,
        [chapterId]: next,
      };
    });
  }

  function applyRawPayload(chapterId: string) {
    const raw = rawTextByChapter[chapterId] ?? "{}";
    try {
      const parsed = JSON.parse(raw);
      const mechanic = mechanicByChapter[chapterId] ?? "TAP_CORRECT";
      const normalized = normalizePayload(parsed, mechanic);
      setPayloadByChapter((current) => ({
        ...current,
        [chapterId]: normalized,
      }));
      setMessage("JSON applied to form.");
    } catch {
      setMessage("JSON is invalid. Please fix formatting and try again.");
    }
  }

  async function saveChapter(event: FormEvent<HTMLFormElement>, chapterId: string) {
    event.preventDefault();
    setMessage(null);
    setSavingId(chapterId);

    const form = new FormData(event.currentTarget);

    let payload: unknown;
    if (rawModeByChapter[chapterId]) {
      const rawPayload = rawTextByChapter[chapterId] ?? "{}";
      try {
        payload = JSON.parse(rawPayload);
      } catch {
        setSavingId(null);
        setMessage("Raw JSON is invalid.");
        return;
      }
    } else {
      payload = payloadByChapter[chapterId];
    }

    const chapterResponse = await fetch(`/api/admin/chapters/${chapterId}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        title: String(form.get("title") ?? ""),
        theme: String(form.get("theme") ?? ""),
        summary: String(form.get("summary") ?? ""),
        publishStatus: String(form.get("publishStatus") ?? "DRAFT"),
      }),
    });

    if (!chapterResponse.ok) {
      setSavingId(null);
      setMessage("Could not save chapter info.");
      return;
    }

    const gameResponse = await fetch(`/api/admin/games/${chapterId}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        mechanicType: mechanicByChapter[chapterId] ?? String(form.get("mechanicType") ?? "TAP_CORRECT"),
        roundTimeSec: Number(form.get("roundTimeSec") ?? 60),
        winRules: String(form.get("winRules") ?? ""),
        contentPayload: payload,
      }),
    });

    if (!gameResponse.ok) {
      const data = (await gameResponse.json().catch(() => ({}))) as { error?: string };
      setSavingId(null);
      setMessage(data.error || "Could not save game config.");
      return;
    }

    setMessage("Saved.");
    setSavingId(null);
    await loadChapters(bookCode);
  }

  async function publish(chapterId: string) {
    setMessage(null);
    setSavingId(chapterId);
    const response = await fetch(`/api/admin/publish/${chapterId}`, { method: "POST" });

    if (!response.ok) {
      const data = (await response.json().catch(() => ({}))) as { reasons?: string[]; error?: string };
      setMessage(data.reasons?.join(" ") || data.error || "Publish failed.");
      setSavingId(null);
      return;
    }

    setMessage("Chapter published.");
    setSavingId(null);
    await loadChapters(bookCode);
  }

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <label className="text-xs font-bold uppercase tracking-wide text-slate-600">Book</label>
          <select
            value={bookCode}
            onChange={(event) => setBookCode(event.target.value)}
            className="rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm"
          >
            {BOOK_OPTIONS.map((option) => (
              <option key={option} value={option}>
                {option.toUpperCase()}
              </option>
            ))}
          </select>
        </div>
        <button className="rounded-xl border border-slate-300 px-3 py-2 text-xs font-bold" onClick={logout}>
          Logout
        </button>
      </div>

      <p className="rounded-xl border border-sky-200 bg-sky-50 px-3 py-2 text-xs font-semibold text-sky-900">
        Friendly Mode: edit fields without JSON. Raw JSON Mode is available per chapter if needed.
      </p>

      {message ? <p className="rounded-xl bg-slate-100 px-3 py-2 text-xs font-semibold text-slate-700">{message}</p> : null}

      {loading ? <p className="text-sm font-semibold text-slate-500">Loading chapter editor...</p> : null}

      {Object.entries(grouped).map(([group, groupChapters]) => (
        <section key={group} className="space-y-3">
          <h2 className="text-sm font-black uppercase tracking-wide text-slate-600">{group}</h2>
          {groupChapters.map((chapter) => {
            const payload = payloadByChapter[chapter.id] ??
              createDefaultPayload((chapter.gameConfig?.mechanicType ?? "TAP_CORRECT") as MechanicType);
            const roundRows = payload.rounds as RoundRecord[];
            const currentMechanic = mechanicByChapter[chapter.id] ??
              ((chapter.gameConfig?.mechanicType ?? "TAP_CORRECT") as MechanicType);
            const isRaw = Boolean(rawModeByChapter[chapter.id]);

            return (
              <form
                key={chapter.id}
                onSubmit={(event) => saveChapter(event, chapter.id)}
                className="space-y-3 rounded-2xl border border-slate-200 bg-white p-4"
              >
                <div className="flex items-center justify-between gap-2">
                  <p className="text-sm font-black text-slate-700">
                    Chapter {chapter.number} - {chapter.id}
                  </p>
                  <button
                    type="button"
                    onClick={() => toggleRawMode(chapter.id)}
                    className="rounded-xl border border-slate-300 px-2 py-1 text-xs font-bold"
                  >
                    {isRaw ? "Use Friendly Mode" : "Use Raw JSON Mode"}
                  </button>
                </div>

                <div className="grid gap-2 sm:grid-cols-2">
                  <label className="space-y-1">
                    <span className="text-xs font-bold text-slate-600">Title</span>
                    <input
                      name="title"
                      defaultValue={chapter.title}
                      className="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm"
                    />
                  </label>
                  <label className="space-y-1">
                    <span className="text-xs font-bold text-slate-600">Theme</span>
                    <input
                      name="theme"
                      defaultValue={chapter.theme}
                      className="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm"
                    />
                  </label>
                </div>

                <label className="block space-y-1">
                  <span className="text-xs font-bold text-slate-600">Summary</span>
                  <textarea
                    name="summary"
                    defaultValue={chapter.summary}
                    className="h-16 w-full rounded-xl border border-slate-300 px-3 py-2 text-sm"
                  />
                </label>

                <div className="grid gap-2 sm:grid-cols-3">
                  <label className="space-y-1">
                    <span className="text-xs font-bold text-slate-600">Status</span>
                    <select
                      name="publishStatus"
                      defaultValue={chapter.publishStatus}
                      className="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm"
                    >
                      <option value="DRAFT">DRAFT</option>
                      <option value="READY">READY</option>
                      <option value="PUBLISHED">PUBLISHED</option>
                    </select>
                  </label>

                  <label className="space-y-1">
                    <span className="text-xs font-bold text-slate-600">Mechanic</span>
                    <select
                      name="mechanicType"
                      value={currentMechanic}
                      onChange={(event) => {
                        const next = event.target.value as MechanicType;
                        setMechanicByChapter((current) => ({
                          ...current,
                          [chapter.id]: next,
                        }));

                        patchPayload(chapter.id, (currentPayload) => {
                          if (currentPayload.rounds.length > 0) {
                            return currentPayload;
                          }
                          return {
                            ...currentPayload,
                            rounds: [createDefaultRoundForMechanic(next)],
                          };
                        });
                      }}
                      className="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm"
                    >
                      {MECHANIC_TYPES.map((type) => (
                        <option key={type} value={type}>
                          {titleCaseMechanic(type)}
                        </option>
                      ))}
                    </select>
                  </label>

                  <label className="space-y-1">
                    <span className="text-xs font-bold text-slate-600">Round Time (sec)</span>
                    <input
                      name="roundTimeSec"
                      type="number"
                      min={30}
                      max={180}
                      defaultValue={chapter.gameConfig?.roundTimeSec ?? 60}
                      className="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm"
                    />
                  </label>
                </div>

                <label className="block space-y-1">
                  <span className="text-xs font-bold text-slate-600">Win Rules</span>
                  <input
                    name="winRules"
                    defaultValue={chapter.gameConfig?.winRules ?? "Score target"}
                    className="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm"
                  />
                </label>

                {isRaw ? (
                  <div className="space-y-2 rounded-xl border border-slate-200 bg-slate-50 p-3">
                    <p className="text-xs font-bold text-slate-700">Raw Game Payload JSON</p>
                    <textarea
                      value={rawTextByChapter[chapter.id] ?? "{}"}
                      onChange={(event) =>
                        setRawTextByChapter((current) => ({
                          ...current,
                          [chapter.id]: event.target.value,
                        }))
                      }
                      className="h-64 w-full rounded-xl border border-slate-300 bg-white px-3 py-2 font-mono text-xs"
                    />
                    <div className="flex gap-2">
                      <button
                        type="button"
                        onClick={() => applyRawPayload(chapter.id)}
                        className="rounded-xl border border-slate-300 px-3 py-2 text-xs font-bold"
                      >
                        Apply JSON To Friendly Form
                      </button>
                      <button
                        type="button"
                        onClick={() =>
                          setRawTextByChapter((current) => ({
                            ...current,
                            [chapter.id]: JSON.stringify(payloadByChapter[chapter.id], null, 2),
                          }))
                        }
                        className="rounded-xl border border-slate-300 px-3 py-2 text-xs font-bold"
                      >
                        Reset JSON From Friendly Form
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-3 rounded-xl border border-sky-200 bg-sky-50/60 p-3">
                    <div className="grid gap-2 sm:grid-cols-2">
                      <label className="space-y-1">
                        <span className="text-xs font-bold text-slate-700">Game Title</span>
                        <input
                          value={payload.title}
                          onChange={(event) =>
                            patchPayload(chapter.id, (current) => ({
                              ...current,
                              title: event.target.value,
                            }))
                          }
                          className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm"
                        />
                      </label>
                      <label className="space-y-1">
                        <span className="text-xs font-bold text-slate-700">Instructions</span>
                        <input
                          value={payload.instructions}
                          onChange={(event) =>
                            patchPayload(chapter.id, (current) => ({
                              ...current,
                              instructions: event.target.value,
                            }))
                          }
                          className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm"
                        />
                      </label>
                      <label className="space-y-1">
                        <span className="text-xs font-bold text-slate-700">Success Message</span>
                        <input
                          value={payload.successMessage}
                          onChange={(event) =>
                            patchPayload(chapter.id, (current) => ({
                              ...current,
                              successMessage: event.target.value,
                            }))
                          }
                          className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm"
                        />
                      </label>
                      <label className="space-y-1">
                        <span className="text-xs font-bold text-slate-700">Try Again Message</span>
                        <input
                          value={payload.failureMessage}
                          onChange={(event) =>
                            patchPayload(chapter.id, (current) => ({
                              ...current,
                              failureMessage: event.target.value,
                            }))
                          }
                          className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm"
                        />
                      </label>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <p className="text-xs font-black uppercase tracking-wide text-slate-700">Rounds</p>
                        <button
                          type="button"
                          onClick={() => addRound(chapter.id)}
                          className="rounded-xl border border-slate-300 bg-white px-3 py-1.5 text-xs font-bold"
                        >
                          Add Round
                        </button>
                      </div>

                      {roundRows.map((round, roundIndex) => {
                        const fields = Object.entries(round);
                        const usedKeys = new Set(fields.map(([fieldKey]) => fieldKey));

                        return (
                          <div key={`${chapter.id}-round-${roundIndex}`} className="space-y-2 rounded-xl border border-slate-200 bg-white p-3">
                            <div className="flex flex-wrap items-center justify-between gap-2">
                              <p className="text-xs font-black uppercase tracking-wide text-slate-600">Round {roundIndex + 1}</p>
                              <div className="flex gap-1">
                                <button
                                  type="button"
                                  onClick={() => moveRound(chapter.id, roundIndex, roundIndex - 1)}
                                  className="rounded-lg border border-slate-300 px-2 py-1 text-[11px] font-bold"
                                >
                                  Up
                                </button>
                                <button
                                  type="button"
                                  onClick={() => moveRound(chapter.id, roundIndex, roundIndex + 1)}
                                  className="rounded-lg border border-slate-300 px-2 py-1 text-[11px] font-bold"
                                >
                                  Down
                                </button>
                                <button
                                  type="button"
                                  onClick={() => removeRound(chapter.id, roundIndex)}
                                  className="rounded-lg border border-rose-300 px-2 py-1 text-[11px] font-bold text-rose-700"
                                >
                                  Remove Round
                                </button>
                              </div>
                            </div>

                            <div className="flex flex-wrap gap-1">
                              {ROUND_FIELD_TEMPLATES.filter((field) => !usedKeys.has(field.key)).map((field) => (
                                <button
                                  key={`${chapter.id}-${roundIndex}-add-${field.key}`}
                                  type="button"
                                  onClick={() => addRoundField(chapter.id, roundIndex, field.key, field.value)}
                                  className="rounded-full border border-slate-300 bg-slate-50 px-2 py-1 text-[11px] font-bold text-slate-700"
                                >
                                  + {field.label}
                                </button>
                              ))}
                            </div>

                            {fields.length === 0 ? (
                              <p className="text-xs text-slate-500">No fields yet. Add fields above.</p>
                            ) : null}

                            {fields.map(([fieldKey, value]) => (
                              <div key={`${chapter.id}-${roundIndex}-${fieldKey}`} className="space-y-1">
                                <div className="flex items-center justify-between">
                                  <label className="text-xs font-bold text-slate-700">{toPrettyLabel(fieldKey)}</label>
                                  <button
                                    type="button"
                                    onClick={() => removeRoundField(chapter.id, roundIndex, fieldKey)}
                                    className="text-[11px] font-bold text-rose-700"
                                  >
                                    Remove Field
                                  </button>
                                </div>

                                {typeof value === "string" ? (
                                  <textarea
                                    value={value}
                                    onChange={(event) => patchRoundField(chapter.id, roundIndex, fieldKey, event.target.value)}
                                    className="h-16 w-full rounded-xl border border-slate-300 px-3 py-2 text-sm"
                                  />
                                ) : null}

                                {typeof value === "number" ? (
                                  <input
                                    type="number"
                                    value={value}
                                    onChange={(event) => patchRoundField(chapter.id, roundIndex, fieldKey, Number(event.target.value))}
                                    className="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm"
                                  />
                                ) : null}

                                {typeof value === "boolean" ? (
                                  <select
                                    value={String(value)}
                                    onChange={(event) => patchRoundField(chapter.id, roundIndex, fieldKey, event.target.value === "true")}
                                    className="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm"
                                  >
                                    <option value="true">True</option>
                                    <option value="false">False</option>
                                  </select>
                                ) : null}

                                {isStringArray(value) ? (
                                  <textarea
                                    value={encodeLines(value)}
                                    onChange={(event) =>
                                      patchRoundField(chapter.id, roundIndex, fieldKey, splitLines(event.target.value))
                                    }
                                    className="h-24 w-full rounded-xl border border-slate-300 px-3 py-2 text-sm"
                                    placeholder="One entry per line"
                                  />
                                ) : null}

                                {isPairArray(value) ? (
                                  <textarea
                                    value={encodePairLines(value)}
                                    onChange={(event) =>
                                      patchRoundField(chapter.id, roundIndex, fieldKey, parsePairLines(event.target.value))
                                    }
                                    className="h-24 w-full rounded-xl border border-slate-300 px-3 py-2 text-sm"
                                    placeholder="left => right"
                                  />
                                ) : null}

                                {isLabelCategoryArray(value) ? (
                                  <textarea
                                    value={encodeItemLines(value)}
                                    onChange={(event) =>
                                      patchRoundField(chapter.id, roundIndex, fieldKey, parseItemLines(event.target.value))
                                    }
                                    className="h-24 w-full rounded-xl border border-slate-300 px-3 py-2 text-sm"
                                    placeholder="label => category"
                                  />
                                ) : null}

                                {typeof value === "object" &&
                                value !== null &&
                                !isStringArray(value) &&
                                !isPairArray(value) &&
                                !isLabelCategoryArray(value) ? (
                                  <textarea
                                    defaultValue={JSON.stringify(value, null, 2)}
                                    onBlur={(event) => {
                                      try {
                                        const parsed = JSON.parse(event.target.value);
                                        patchRoundField(chapter.id, roundIndex, fieldKey, parsed);
                                      } catch {
                                        setMessage(`Invalid JSON in field ${fieldKey}.`);
                                      }
                                    }}
                                    className="h-24 w-full rounded-xl border border-slate-300 px-3 py-2 font-mono text-xs"
                                  />
                                ) : null}
                              </div>
                            ))}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}

                <div className="flex gap-2">
                  <button
                    type="submit"
                    disabled={savingId === chapter.id}
                    className="rounded-xl bg-slate-900 px-3 py-2 text-xs font-bold text-white disabled:opacity-60"
                  >
                    Save
                  </button>
                  <button
                    type="button"
                    disabled={savingId === chapter.id}
                    onClick={() => publish(chapter.id)}
                    className="rounded-xl bg-emerald-600 px-3 py-2 text-xs font-bold text-white disabled:opacity-60"
                  >
                    Publish
                  </button>
                </div>
              </form>
            );
          })}
        </section>
      ))}
    </div>
  );
}
