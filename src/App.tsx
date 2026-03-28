import Container from "@/components/container.tsx"
import { useFontStore } from "@/store/fontStore"
import { fontClassMap } from "@/lib/fontClasses"

export function App() {
  const font = useFontStore((s) => s.font)
  return (
    <div className={fontClassMap[font]}>
      <Container />
    </div>
  )
}

export default App
