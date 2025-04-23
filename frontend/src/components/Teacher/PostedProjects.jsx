import React from 'react'


  const PostedProjects = () => {
    const projects = [
      {
        project_name: "AI Chatbot",
        cluster_name: "Cluster A",
        description: "Build a chatbot using natural language processing.",
        phases: [
          { requirement: "Research NLP", deadline_days: 5 },
          { requirement: "Design UI", deadline_days: 3 },
          { requirement: "Build backend", deadline_days: 7 },
          { requirement: "Integrate AI", deadline_days: 4 },
          { requirement: "Testing", deadline_days: 2 },
        ],
      },
      {
        project_name: "E-Commerce App",
        cluster_name: "Cluster B",
        description: "Create a full-stack e-commerce application.",
        phases: [
          { requirement: "Frontend Design", deadline_days: 4 },
          { requirement: "Database Setup", deadline_days: 3 },
          { requirement: "APIs Development", deadline_days: 6 },
          { requirement: "Payment Gateway", deadline_days: 5 },
          { requirement: "Deployment", deadline_days: 2 },
        ],
      },
    ];
  
    return (
      <div className="p-6 w-full max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold text-center text-purple-700 mb-6">Posted Projects</h2>
  
        <div className="overflow-x-auto">
        <table className="min-w-full rounded-2xl shadow-md border-separate border-spacing-y-2">
            <thead className='rounded-md'>
              <tr className="bg-purple-100 rounded-md  text-purple-800 text-left text-sm">
                <th className="py-2 bg-white mb text-xl px-4 ">Project Name</th>
                <th className="py-2 bg-white mb text-xl px-4 ">Cluster</th>
                <th className="py-2 bg-white mb text-xl px-4 ">Description</th>
                <th className="py-2 bg-white mb text-xl px-4 ">Phases</th>
              </tr>
            </thead>
            <tbody className='bg-white'>
              {projects.map((proj, i) => (
                <tr key={i} className=" bg-white  transition">
                  <td className="py-2 px-4 bg-white ">{proj.project_name}</td>
                  <td className="py-2 px-4 bg-white ">{proj.cluster_name}</td>
                  <td className="py-2 px-4 bg-white ">{proj.description}</td>
                  <td className="py-2 px-4 bg-white ">
                    <ul className="list-disc ml-4 bg-white text-sm space-y-1">
                      {proj.phases.map((p, index) => (
                        <li className='bg-white' key={index}>
                          <span className="font-medium bg-white">Phase {index + 1}:</span> {p.requirement} — {p.deadline_days} days
                        </li>
                      ))}
                    </ul>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  };

export default PostedProjects