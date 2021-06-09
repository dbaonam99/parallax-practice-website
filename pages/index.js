import Menu from '../components/Element/Menu'
import Bar from '../components/Element/Bar'
import SectionOne from '../components/Section/SectionOne'
import SectionTwo from '../components/Section/SectionTwo'

export default function Home() {
  return (
    <div className="root">
      <Menu />
      <Bar/>
      <SectionOne />
      <SectionTwo/>
    </div>
  )
}
