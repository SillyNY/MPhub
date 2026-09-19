"use client"

import { useState } from "react"
import { RELATION_CHARACTERS } from "@/lib/utils/constants"
import type { RcDetails } from "@/lib/utils/constants"
import { ReRelationWidget } from "./ReRelationWidget"
import { ReRelationEcho } from "./ReRelationEcho"

export function ReSidebar() {
  const [selectedName, setSelectedName] = useState<string | null>("漂泊者")

  const detail: RcDetails | null =
    RELATION_CHARACTERS.find((c) => c.name === selectedName) ?? null

  return (
    <aside className="flex flex-col gap-4 w-full">
      <ReRelationWidget onSelect={setSelectedName} />
      <ReRelationEcho character={detail} />
    </aside>
  )
}
