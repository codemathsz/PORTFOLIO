import {
  LineDecoration,
  Skill,
  SkillContainer,
  SkillsContent,
  Title,
} from './styles'

import javaImg from '../../assets/svgs/java.svg'
import reactImg from '../../assets/svgs/react.svg'
import htmlImg from '../../assets/svgs/html.svg'
import cssImg from '../../assets/svgs/css.svg'
import javascriptImg from '../../assets/svgs/javascript.svg'
import nodeImg from '../../assets/svgs/nodejs.svg'
import mysqlImg from '../../assets/svgs/mysql.svg'
import phpImg from '../../assets/svgs/php.svg'
import linuxImg from '../../assets/svgs/linux.svg'
import trelloImg from '../../assets/svgs/trello.svg'
import springImg from '../../assets/svgs/springboot.svg'
import gitImg from '../../assets/svgs/git.svg'
import typescriptImg from '../../assets/svgs/typescript.svg'
import figmaImg from '../../assets/svgs/figma.svg'

export function Skills() {
  return (
    <SkillContainer>
      <Title>
        <LineDecoration />
        <span>My Skills</span>
        <LineDecoration />
      </Title>

      <SkillsContent>
        <Skill title="JAVA">
          <img src={javaImg} alt="" />
        </Skill>

        <Skill title="REACT">
          <img src={reactImg} alt="" />
        </Skill>

        <Skill title="HTML5">
          <img src={htmlImg} alt="" />
        </Skill>

        <Skill title="CSS3">
          <img src={cssImg} alt="" />
        </Skill>

        <Skill title="JAVASCRIPT">
          <img src={javascriptImg} alt="" />
        </Skill>

        <Skill title="NODEJS">
          <img src={nodeImg} alt="" />
        </Skill>

        <Skill title="MYSQL">
          <img src={mysqlImg} alt="" />
        </Skill>

        <Skill title="PHP">
          <img src={phpImg} alt="" />
        </Skill>

        <Skill title="LINUX">
          <img src={linuxImg} alt="" />
        </Skill>

        <Skill title="TRELLO">
          <img src={trelloImg} alt="" />
        </Skill>

        <Skill title="SPRINGBOOT">
          <img src={springImg} alt="" />
        </Skill>

        <Skill title="GIT">
          <img src={gitImg} alt="" />
        </Skill>

        <Skill title="TYPESCRIPT">
          <img src={typescriptImg} alt="" />
        </Skill>

        <Skill title="FIGMA">
          <img src={figmaImg} alt="" />
        </Skill>
      </SkillsContent>
    </SkillContainer>
  )
}
