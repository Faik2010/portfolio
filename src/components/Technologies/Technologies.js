import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
 <Section id='tech'>
<SectionDivider/>
<br/>
<SectionTitle>Technologies</SectionTitle>
{/* <SectionText>some text</SectionText> */}
<List>
  <ListItem>
    <DiReact size="3rem"/>
    <ListContainer>
      <ListTitle>Front-End</ListTitle>
      <ListParagraph>
        Experience with <br/>
        React.js and Angular 2+
      </ListParagraph>
    </ListContainer>
  </ListItem>
  <ListItem>
    <DiFirebase size="3rem"/>
    <ListContainer>
      <ListTitle>Back-End</ListTitle>
      <ListParagraph>
        Experience with <br/>
        Node, C# and Databases
      </ListParagraph>
    </ListContainer>
  </ListItem>
  <ListItem>
    <DiZend size="3rem"/>
    <ListContainer>
      <ListTitle>UI/UX</ListTitle>
      <ListParagraph>
        Experience with <br/>
        Figma
      </ListParagraph>
    </ListContainer>
  </ListItem>
</List>
 </Section>
);

export default Technologies;
