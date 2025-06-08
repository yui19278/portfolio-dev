import { skills } from '../data/data';

export default function SkillsSection() {
  return (
    <section id="skills" className="my-5">
      <h2 className="text-2xl font-semibold mb-4">技術スタック</h2>
      <div className="row">
        {Object.entries(skills).map(([category, list]) => (
          <div key={category} className="col-md-6 mb-3">
            <h5 className="text-lg font-medium mb-2">{category}</h5>
            {/* list-unstyled（Bootstrap） / list-none（Tailwind） を指定 */}
            <ul className="d-flex flex-wrap list-unstyled p-0 m-0">
              {list.map(skill => (
                <li key={skill.name} className="d-flex align-items-center me-4 mb-2">
                  <span className="fs-3">{skill.icon}</span>
                  <span className="ms-1">{skill.name}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
