import React from "react";

const Skills = () => {
	return (
		<div className="skills-container">
			<h1>Skillset</h1>
			<article className="skills-type">
				<section id="competencies">
					<h3>Competencies</h3>
					<div class="skills skills-primary">
						<div class="skill" data-skill="5">
							<span>HTML</span>
						</div>
						<div class="skill" data-skill="3">
							<span>CSS</span>
						</div>
						<div class="skill" data-skill="1">
							<span>Javascript</span>
						</div>
					</div>
					<div class="skills skills-secondary">
						<div class="skill" data-skill="9">
							<span>HTML</span>
						</div>
						<div class="skill" data-skill="5">
							<span>CSS</span>
						</div>
						<div class="skill" data-skill="7">
							<span>Javascript</span>
						</div>
					</div>
				</section>
			</article>
		</div>
	);
};

export default Skills;
