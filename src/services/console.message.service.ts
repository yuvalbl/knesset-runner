const msgs = [
  'הלו הלו, זה פרטי, למה להציץ?!',
  'זהירות כלב נושך',
  'למכירה: פומרניאן יד 2 במצב טוב',
  'טרילילי טרללה טרילי',
];



export function displayRandomConsoleMessage() {
  const index = Math.floor(Math.random() * msgs.length);
  
  console.log(`%c${msgs[index]}`, 'color: red; font-size: 60px; font-weight: bold;');
  console.log('%cפשוט תגידו שאתם רוצים לראות את הקוד...', 'color: red; font-size: 30px; font-weight: bold;');
  console.log('https://github.com/yuvalbl/knesset-runner');
}
