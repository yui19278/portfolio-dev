import { Card } from 'react-bootstrap';
import { skills } from '../data/data';
import './TechList.css';

export default function SkillsSection() {
  return (
    <section id="skills" className="my-5">
      <h2 className="text-center mb-5">技術スタック</h2>
      {Object.entries(skills).map(([category, list]) => (
        <div key={category} className="mb-5">
          <h3 className="text-xl font-semibold mb-4 text-center">{category}</h3>
          <div className="d-flex flex-wrap justify-content-center gap-4">
            {list.map(skill => (
              <Card key={skill.name} className="tech-card text-center shadow-sm">
                <Card.Body>
                  <div className="tech-icon mb-2">{skill.icon}</div>
                  <Card.Text>{skill.name}</Card.Text>
                </Card.Body>
              </Card>
            ))}
          </div>
          {category === 'backend' && (
            <p className="mt-4 text-center text-sm text-muted">
              ※この中で、Scalaには特別な思い入れがあります．高2の時に夢中になったマイクラ鯖が，学生がScalaを用いて開発したOSSであったことが私のプログラマ人生のきっかけです．
            </p>
          )}
        </div>
      ))}
    </section>
  );
}