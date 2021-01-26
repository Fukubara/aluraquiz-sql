import db from '../db.json'

import Background from '../src/components/Background'
import Widget from '../src/components/Widget'
import QuizContainer from '../src/components/QuizContainer'
import QuizLogo from '../src/components/QuizLogo'
import Footer from '../src/components/Footer'
import GitHubCorner from '../src/components/GitHubCorner'

export default function Home() {
  return (
    <Background>
      <QuizContainer>
        <QuizLogo />
        <Widget>
          <Widget.Header>
            {db.title}
          </Widget.Header>
          <Widget.Content>
            {db.description}
          </Widget.Content>
        </Widget>
        <Widget>
          <Widget.Content>
            <h1>Quiz da Galera</h1>
            <p>entrada</p>
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner />
    </Background>
  )
}

