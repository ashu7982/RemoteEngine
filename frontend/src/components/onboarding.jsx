
import React, { useState } from "react";

export default function Onboarding() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    skills: ["", "", ""],
    professionalExperiences: [
      {
        companyName: "",
        techStack: "",
        skillsUsed: ["", ""],
        timePeriod: "2022",
      },
      {
        companyName: "",
        techStack: "",
        skillsUsed: ["", ""],
        timePeriod: "2023",
      },
    ],
    educationalExperiences: [
      {
        degreeName: "",
        schoolName: "",
        timePeriod: "2023",
      },
    ],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8080/developers/onboarding", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Developers onboarding details saved successfully");
      } else {
        alert("Error while saving developer onboarding data to the server");
      }
    } catch (err) {
      console.error(err);
      alert("An error occurred during saving the submission");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        First Name:
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
        />
      </label>

      <label>
        Last Name:
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
        />
      </label>

      <label>
        Phone Number:
        <input
          type="text"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
        />
      </label>

      <label>
        Email:
        <input
          type="text"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </label>

      {/* skills array starts from here, here we just map through the skills to put it inside an array */}
      <label>
        Skills:
        {formData.skills.map((skill, index) => (
          <input
            key={index}
            type="text"
            name={`skills[${index}]`}
            value={skill}
            onChange={(e) => {
              const updatedSkills = [...formData.skills];
              updatedSkills[index] = e.target.value;
              setFormData((prevData) => ({
                ...prevData,
                skills: updatedSkills,
              }));
            }}
          />
        ))}

        {/* button for adding more skills if user wants  */}
        <button
          type="button"
          onClick={() =>
            setFormData((prevData) => ({
              ...prevData,
              skills: [...prevData.skills, ""],
            }))
          }
        >
          Add Skill
        </button>
      </label>

      {/* professional expreience's array starts from here*/}
      <label>
        Professional Experiences:
        {formData.professionalExperiences.map((experience, index) => (
          <div key={index}>
            <label>
              Company Name:
              <input
                type="text"
                name={`professionalExperiences[${index}].companyName`}
                value={experience.companyName}
                onChange={(e) => {
                  const updatedExperiences = [...formData.professionalExperiences];
                  updatedExperiences[index].companyName = e.target.value;
                  setFormData((prevData) => ({
                    ...prevData,
                    professionalExperiences: updatedExperiences,
                  }));
                }}
              />
            </label>

            
            {/* tech stack used in company can be add here */}
            <label>
              Tech Stack:
              <input
                type="text"
                name={`professionalExperiences[${index}].techStack`}
                value={experience.techStack}
                onChange={(e) => {
                  const updatedExperiences = [...formData.professionalExperiences];
                  updatedExperiences[index].techStack = e.target.value;
                  setFormData((prevData) => ({
                    ...prevData,
                    professionalExperiences: updatedExperiences,
                  }));
                }}
              />
            </label>

            {/* here we can add skills according to our need */}
            <label>
              Skills Used:
              {experience.skillsUsed.map((skill, skillIndex) => (
                <input
                  key={skillIndex}
                  type="text"
                  name={`professionalExperiences[${index}].skillsUsed[${skillIndex}]`}
                  value={skill}
                  onChange={(e) => {
                    const updatedSkillsUsed = [...experience.skillsUsed];
                    updatedSkillsUsed[skillIndex] = e.target.value;
                    const updatedExperiences = [...formData.professionalExperiences];
                    updatedExperiences[index].skillsUsed = updatedSkillsUsed;
                    setFormData((prevData) => ({
                      ...prevData,
                      professionalExperiences: updatedExperiences,
                    }));
                  }}
                />
              ))}

              
              {/* we can add as many skills we want with the help of this */}
              <button
                type="button"
                onClick={() => {
                  const updatedSkillsUsed = [...experience.skillsUsed, ""];
                  const updatedExperiences = [...formData.professionalExperiences];
                  updatedExperiences[index].skillsUsed = updatedSkillsUsed;
                  setFormData((prevData) => ({
                    ...prevData,
                    professionalExperiences: updatedExperiences,
                  }));
                }}
              >
                Add Skill Used
              </button>
            </label>

           
          </div>
        ))}
        <button
          type="button"
          onClick={() =>
            setFormData((prevData) => ({
              ...prevData,
              professionalExperiences: [
                ...prevData.professionalExperiences,
                {
                  companyName: "",
                  techStack: "",
                  skillsUsed: ["", ""],
                  timePeriod: "",
                },
              ],
            }))
          }
        >
          Add Professional Experience
        </button>
      </label>

      {/* Here we can Educational Experiences  */}
      <label>
        Educational Experiences:
        {formData.educationalExperiences.map((experience, index) => (
          <div key={index}>
            <label>
              Degree Name:
              <input
                type="text"
                name={`educationalExperiences[${index}].degreeName`}
                value={experience.degreeName}
                onChange={(e) => {
                  const updatedExperiences = [...formData.educationalExperiences];
                  updatedExperiences[index].degreeName = e.target.value;
                  setFormData((prevData) => ({
                    ...prevData,
                    educationalExperiences: updatedExperiences,
                  }));
                }}
              />
            </label>

            
            <label>
              School Name:
              <input
                type="text"
                name={`educationalExperiences[${index}].schoolName`}
                value={experience.schoolName}
                onChange={(e) => {
                  const updatedExperiences = [...formData.educationalExperiences];
                  updatedExperiences[index].schoolName = e.target.value;
                  setFormData((prevData) => ({
                    ...prevData,
                    educationalExperiences: updatedExperiences,
                  }));
                }}
              />
            </label>

            
          </div>
        ))}

        {/* with the help of this we can add as many education experince as we wants */}
        <button
          type="button"
          onClick={() =>
            setFormData((prevData) => ({
              ...prevData,
              educationalExperiences: [
                ...prevData.educationalExperiences,
                {
                  degreeName: "",
                  schoolName: "",
                  timePeriod: "",
                },
              ],
            }))
          }
        >
          Add Educational Experience
        </button>
      </label>

      <button type="submit">Submit</button>
    </form>
  );
}
