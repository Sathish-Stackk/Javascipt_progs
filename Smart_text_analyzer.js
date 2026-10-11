function analyzeText(text) {
    const words = text.trim().split(/\s+/);
    const characters = text.replace(/\s/g, "").length;
    const vowels = (text.match(/[aeiou]/gi) || []).length;

    console.log("Words:", words.length);
    console.log("Characters:", characters);
    console.log("Vowels:", vowels);
    console.log("Average Word Length:", 
        (characters / words.length).toFixed(2));
}

analyzeText("Learning JavaScript improves logical thinking");
