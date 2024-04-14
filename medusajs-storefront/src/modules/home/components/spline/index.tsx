// SplineComponent.tsx
"use client"
import Spline from "@splinetool/react-spline"

export default function SplineComponent() {
  return (
    <div
      style={{ height: "75vh", width: "100%", position: "absolute", zIndex: 0 }}
    >
      <Spline scene="https://prod.spline.design/I6EUN-AaD7pkfxGa/scene.splinecode" />
    </div>
  )
}
