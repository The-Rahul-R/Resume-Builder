export const generateResumeData = () => {
    const resumeContainer = document.querySelector('.printResume').innerHTML
    document.body.innerHTML = resumeContainer;
    print();
};
