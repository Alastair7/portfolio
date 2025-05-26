export const getProfessionalExperience = (startingDate: Date): string => {
  const currentDate = new Date();

  let currentExperienceYears = Math.abs(startingDate.getFullYear() - currentDate.getFullYear());
  let currentExperienceMonths = Math.abs(startingDate.getMonth() - currentDate.getMonth());
  let currentExperienceDays = Math.abs(startingDate.getDate() - currentDate.getDate());

  const anniversary = new Date(currentDate.getFullYear(), 0, 11);

  if (currentDate < anniversary) {
    currentExperienceYears -= 1;
  }

  return `${currentExperienceYears} years ${currentExperienceMonths} months ${currentExperienceDays} days`;
};
