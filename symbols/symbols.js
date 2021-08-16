const obj = {
  ...Object.fromEntries(["амперсант","амперсанд","и"].map(key => [key, '&'])),
  ...Object.fromEntries(["больше равно","больше или равно","больше либо равно"].map(key => [key, '≥'])),
  ...Object.fromEntries(["включение","знак включения","входит","вхождение","включается","содержится"].map(key => [key, '⊂'])),
  ...Object.fromEntries(["градус","знак градуса","градус цельсия"].map(key => [key, '°'])),
  ...Object.fromEntries(["делить","деление","разделить","поделить"].map(key => [key, '÷'])),
  ...Object.fromEntries(["звезда","звёздочка","звездочка"].map(key => [key, '✩'])), 
  ...Object.fromEntries(["корень третьей степени", "корень 3 степени"].map(key => [key, "∛"])), 
  ...Object.fromEntries(["корень четвёртой степени", "корень четвертой степени", "корень 4 степени"].map(key => [key, "∜"])), 
  ...Object.fromEntries(["квадратный корень","корень"].map(key => [key, '√'])),
  ...Object.fromEntries(["квадрат","квадратик"].map(key => [key, '∎'])),
  ...Object.fromEntries(["круг", "кружок","закрашенный круг","закрашенный кружок"].map(key => [key, "●"])),
  ...Object.fromEntries(["куб","кубик"].map(key => [key, '❒'])),
  ...Object.fromEntries(["меньше равно","меньше или равно","меньше либо равно"].map(key => [key, '≤'])),
  ...Object.fromEntries(["не равно","неравенство"].map(key => [key, '≠'])),
  ...Object.fromEntries(["не включая","невключение","не включение","не входит","не включается","не содержится"].map(key => [key, '⊄'])),
  ...Object.fromEntries(["нижний прочекр","нижнее подчеркивание","нижнее подчёркивание"].map(key => [key, '_'])),
  ...Object.fromEntries(["объединение","знак объединения","объединяет"].map(key => [key, '∪'])),
  ...Object.fromEntries(["охраняемый","знак охраны","права","защита прав"].map(key => [key, '®'])),
  ...Object.fromEntries(["пересечение","знак пересечения","пересекает"].map(key => [key, '∩'])),
  ...Object.fromEntries(["приблизительно равно","приблизительное равенство","примерно равно","примерное равенство"].map(key => [key, '≈'])),
  ...Object.fromEntries(["принадлежит","принадлежность","знак принадлежности"].map(key => [key, '∈'])),
  ...Object.fromEntries(["пропорциональность","пропорционально","пропорция","пропорционально равно"].map(key => [key, '∝'])),
  ...Object.fromEntries(["произведение","произведение по","знак произведения"].map(key => [key, '∏'])), 
  ...Object.fromEntries(["пи","число пи"].map(key => [key, 'π'])),
  ...Object.fromEntries(["плюс минус","плюсминус","+-"].map(key => [key, '±'])),
  ...Object.fromEntries(["решетка","решётка"].map(key => [key, '#'])), 
  ...Object.fromEntries(["ро","буква ро"].map(key => [key, 'ρ'])),  
  ...Object.fromEntries(["ромб","ромбик"].map(key => [key, '◊'])), 
  ...Object.fromEntries(["сердце","сердечко"].map(key => [key, '❤'])),
  ...Object.fromEntries(["степень","знак степени", "возведение в степень"].map(key => [key, '^'])),
  ...Object.fromEntries(["сумма","сумма по","знак суммы"].map(key => [key, '∑'])),
  ...Object.fromEntries(["тире","длинное тире"].map(key => [key, '—'])), 
  ...Object.fromEntries(["умножить","умножение"].map(key => [key, '×'])), 
  ...Object.fromEntries(["фи","сбуква фи"].map(key => [key, 'φ'])), 
  ...Object.fromEntries(["эквивалентность","эквиваленция","подобно","подобие","тильда"].map(key => [key, '∿'])),
}

const SYMBOLS_VOCAB = new Map(Object.entries(obj));
SYMBOLS_VOCAB.set("абзац", "¶")
SYMBOLS_VOCAB.set("авторское право", "©")
SYMBOLS_VOCAB.set("альфа", "α")
SYMBOLS_VOCAB.set("апостроф", "'")
SYMBOLS_VOCAB.set("бета", "β")
SYMBOLS_VOCAB.set("бесконечность", "∞")
SYMBOLS_VOCAB.set("больше", ">")
SYMBOLS_VOCAB.set("галочка", "✓")
SYMBOLS_VOCAB.set("гамма", "γ")
SYMBOLS_VOCAB.set("дельта", "∆")
SYMBOLS_VOCAB.set("доллар", "$")
SYMBOLS_VOCAB.set("евро", "€")
SYMBOLS_VOCAB.set("интеграл", "∫") 
SYMBOLS_VOCAB.set("карандаш", "✎") 
SYMBOLS_VOCAB.set("коммутант", "G'")
SYMBOLS_VOCAB.set("крест", "✛")
SYMBOLS_VOCAB.set("крестик", "✕") 
SYMBOLS_VOCAB.set("лямбда", "λ")
SYMBOLS_VOCAB.set("меньше", "<")
SYMBOLS_VOCAB.set("минус", "-")
SYMBOLS_VOCAB.set("надмножество", "⊇")
SYMBOLS_VOCAB.set("не принадлежит", "∉")
SYMBOLS_VOCAB.set("ножницы", "✂")
SYMBOLS_VOCAB.set("номер", "№")
SYMBOLS_VOCAB.set("окружность", "◯") 
SYMBOLS_VOCAB.set("ом", "Ω")
SYMBOLS_VOCAB.set("омега", "ω")
SYMBOLS_VOCAB.set("отрицание", "¬") 
SYMBOLS_VOCAB.set("параграф", "§")
SYMBOLS_VOCAB.set("плюс", "+")
SYMBOLS_VOCAB.set("подмножество", "⊆")
SYMBOLS_VOCAB.set("почта", "✉")
SYMBOLS_VOCAB.set("производная", "f'(x)")
SYMBOLS_VOCAB.set("промилле", "‰") 
SYMBOLS_VOCAB.set("процент", "%") 
SYMBOLS_VOCAB.set("прямая сумма", "⊕") 
SYMBOLS_VOCAB.set("пустое множество", "∅")
SYMBOLS_VOCAB.set("равно", "=")
SYMBOLS_VOCAB.set("радиация", "☣")
SYMBOLS_VOCAB.set("собака", "@")
SYMBOLS_VOCAB.set("стрелка влево", "←")
SYMBOLS_VOCAB.set("стрелка вверх", "↑")
SYMBOLS_VOCAB.set("стрелка вправо", "→")
SYMBOLS_VOCAB.set("стрелка вниз", "↓")
SYMBOLS_VOCAB.set("стремится", "⟶")
SYMBOLS_VOCAB.set("телефон", "☎")
SYMBOLS_VOCAB.set("тензорное произведение", "⊗")
SYMBOLS_VOCAB.set("товарный знак", "™")
SYMBOLS_VOCAB.set("треугольник", "▲")
SYMBOLS_VOCAB.set("угол", "∠")
SYMBOLS_VOCAB.set("фунт", "£")

module.exports = SYMBOLS_VOCAB
