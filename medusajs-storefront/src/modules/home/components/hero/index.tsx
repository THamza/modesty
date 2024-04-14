import { Button } from "@medusajs/ui"
import dynamic from "next/dynamic"
import Link from "next/link"

const SplineComponent = dynamic(() => import("../spline"), {
  ssr: false,
})

const Hero = () => {
  return (
    <div className="relative overflow-hidden" style={{ height: "75vh" }}>
      <SplineComponent />
      <div className="absolute inset-0 z-10 flex flex-col  text-center p-8 gap-6 justify-between">
        <h1 className="text-3xl leading-tight font-bold text-black mt-10">
          <span className="inline-block transition-all duration-500 ease-out text-xl">
            Unveil
          </span>{" "}
          <span className="word-effect inline-block mx-5 transition-all duration-500 ease-out hover:scale-125 hover:text-black">
            Elegance,
          </span>{" "}
          <br />
          <span className="inline-block transition-all duration-500 ease-out ml-24 text-xl">
            Embrace
          </span>{" "}
          <span className="word-effect inline-block mx-5 transition-all duration-500 ease-out hover:scale-125 hover:text-black">
            Modesty.
          </span>
        </h1>
        <Button variant="primary" className="mx-auto ">
          <Link
            href="/store"
            className="text-white bg-black px-4 py-2 rounded-lg hover:bg-white hover:text-black hover:shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:-rotate-2"
          >
            Visit our Store
          </Link>
        </Button>
      </div>
    </div>
  )
}

export default Hero
