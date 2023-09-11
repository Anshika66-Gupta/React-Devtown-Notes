//import Heading from './Heading.js';
//import Section from './Section.js';

import { useOnlineStatus } from "./UseOnlineStatus";

//export default function Page() {
//  return (
//    <Section>
//      <Heading>Title</Heading>
//      <Section>
//        <Heading>Heading</Heading>
//        <Heading>Heading</Heading>
//        <Heading>Heading</Heading>
//        <Section>
//          <Heading>Sub-heading</Heading>
//          <Heading>Sub-heading</Heading>
//          <Heading>Sub-heading</Heading>
//          <Section>
//            <Heading>Sub-sub-heading</Heading>
//            <Heading>Sub-sub-heading</Heading>
//            <Heading>Sub-sub-heading</Heading>
//          </Section>
//        </Section>
//      </Section>
//    </Section>
//  );
//}


function StatusBar() {
  const isOnline = useOnlineStatus();
  //return <h1>{isOnline ? '✅ Online' : '❌ Disconnected'}</h1>;
  return <h1>{isOnline ? '✅ Online' : '❌ Disconnected'}</h1>;


}

export default function App() {
  return <StatusBar />;
}
