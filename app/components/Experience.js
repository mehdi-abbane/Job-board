// components/Experience.js
const Experience = ({ experiences }) => {
    return (
        <div className="mt-4">
            <h3 className="text-lg font-bold">Experience</h3>
            <ul className="list-disc pl-5">
                {experiences == null || experiences.length == 0 ?
                    <div>No Experience</div>
                    :
                    experiences.map((exp, index) => (
                        <li key={index}>
                            <p>{exp.title} at {exp.company}</p>
                            <p className="text-sm text-gray-500">{exp.duration}</p>
                        </li>
                    ))}
            </ul>
        </div>
    );
};

export default Experience;

