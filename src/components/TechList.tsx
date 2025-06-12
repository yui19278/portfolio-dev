import {SkillCard, skills} from '../data/data';

export default function SkillsSection() {
    return (
        <section id="skills" className="py-16 bg-gray-50 dark:bg-gray-900">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-4 text-gray-800 dark:text-white">技術スタック</h2>
                {Object.entries(skills).map(([category, list]) => (
                    <div key={category} className="mb-12 last:mb-0">
                        <h3 className="text-2xl font-semibold mb-6 text-center text-gray-700 dark:text-gray-300">{category}</h3>
                        <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
                            {list.map(skill => (
                                <SkillCard key={skill.name} skill={skill} />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
