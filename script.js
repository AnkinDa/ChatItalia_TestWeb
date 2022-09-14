const ruleControlDiv = document.querySelector(".rules-control"),
      buttonRuleVRC = document.querySelector(".rule-vrc"),
      buttonRuleDs = document.querySelector(".rule-ds"),
      rulesContainer = document.querySelector(".rules");

buttonRuleVRC.addEventListener('click', () => {
    rulesContainer.classList.remove("active");
    buttonRuleVRC.classList.add("active");
    buttonRuleDs.classList.remove("active");
});
buttonRuleDs.addEventListener('click', () => {
    rulesContainer.classList.add("active");
    buttonRuleVRC.classList.remove("active");
    buttonRuleDs.classList.add("active");
});