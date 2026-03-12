import { MapPinned } from "lucide-react";

export function MapPlaceholder() {
  return (
    <div className="panel relative overflow-hidden p-6 sm:p-8">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(123,139,121,0.18),_transparent_36%),linear-gradient(135deg,_rgba(255,255,255,0.75),_rgba(245,239,230,0.94))]" />
      <div className="relative space-y-4">
        <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[rgba(139,46,39,0.1)] text-[color:var(--primary)]">
          <MapPinned className="h-6 w-6" />
        </div>
        <div className="space-y-2">
          <h3 className="ink-title text-xl">地图模块预留</h3>
          <p className="text-sm leading-7 text-[color:var(--muted)]">
            当前版本先提供路线理解与区域提示，后续可接入高德地图或其他地图服务，实现实时导航与片区标注。
          </p>
        </div>
      </div>
    </div>
  );
}
