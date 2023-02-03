function generateTeam(data) {
    return `# ${data.title}
  
  ## GitHub
  
    ${data.GitHub}
  
  ## Description  
  
    ${data.description}
  
    `;
}
    module.exports = generateTeam;