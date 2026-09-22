"use client";

import { useParams, useSearchParams } from "next/navigation";
import { Suspense } from "react";
import TemplateClassic from "../../../../components/templates/TemplateClassic";
import TemplateMinimalist from "../../../../components/templates/TemplateMinimalist";
import TemplateFloral from "../../../../components/templates/TemplateFloral";

function InviteContent() {
  const params = useParams();
  const searchParams = useSearchParams();
  
  const guestId = params.guestId as string;
  const guestName = guestId ? guestId.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ") : "Bạn";
  
  const templateType = searchParams.get("template");

  switch (templateType) {
    case "minimalist":
      return <TemplateMinimalist guestName={guestName} />;
    case "floral":
      return <TemplateFloral guestName={guestName} />;
    case "classic":
    default:
      return <TemplateClassic guestName={guestName} />;
  }
}

export default function InvitePage() {
  return (
    <Suspense fallback={<div className="h-screen w-full flex items-center justify-center bg-[#0a0b0b] text-white">Loading...</div>}>
      <InviteContent />
    </Suspense>
  );
}
