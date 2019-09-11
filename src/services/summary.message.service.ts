function between(x: number, min: number, max: number) {
  return x > min && x <= max;
}

export function getSummaryByMandates(num: number, character: string) {
  if(num === 0) {
    return 'לא נורא, שמעתי שמחפשים עובדים בוולט';
  } else if (between(num, 0 , 4)){
    return 'אפילו את אחוז החסימה לא עברת';
  } else if (between(num, 4 , 10)){
    switch (character) {
      case 'gantz':
        return 'איך תכננת להחליף ככה את השלטון?';
      case 'deri':
      case 'shaked':
      case 'liberman':
        return 'מספיק טוב כדי להשפיע מתוך הקואליציה';
      case 'uda':
        return 'אכזבת את המגזר';
      default:
        return 'בתכלס אף אחד לא ציפה מכם ליותר מזה';
    }
  } else if (between(num, 10 , 20)){
    switch (character) {
      case 'gantz':
        return 'אמרנו לך שלפיד היה רעיון לא מוצלח';
      case 'deri':
        return 'מה? אני לא שומע אתכם דרך החסינות שלי';
      case 'shaked':
        return 'לי זה מריח כמו דמוקרטיה';
      case 'liberman':
        return 'אוי כמה שאני אוהב תיקים';
      case 'shafir':
      case 'peretz':
        return 'הו וואו, השמאל חזר?';
      default:
        return 'אופוזיציה, אבל לפניכם';
    }
  } else if (between(num, 10 , 119)){
    switch (character) {
      case 'gantz':
        return 'יששש ניצחנו את ביבי! מה עכשיו?';
      case 'deri':
        return 'מדינת הלכה! מדינת הלכה!';
      case 'shaked':
        return 'פאשיזם זה כאן';
      case 'liberman':
        return 'תגידו שלום לדיקטטור החדש שלכם';
      case 'shafir':
      case 'peretz':
        return 'איז דיס פור ריל?';
      default:
        return 'וואו, אז ככה זה מרגיש להיות הרוב?';
    }
  } else {
    return 'ביבי זה אתה?';
  }
}
