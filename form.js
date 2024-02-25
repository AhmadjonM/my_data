let degrees = 14;
let clothes
switch (degrees) {
    case 20:
    case 21:
    case 22:
    case 23:
    case 24:
    case 25:
        clothes = "футболки, майки"
        break;

    case 15:
    case 16:
    case 17:
    case 18:
    case 19:
       clothes = "свитер, толстовка"
       break;

    case 10:
    case 11:
    case 12:
    case 13:
    case 14:
        clothes = "ветровки, куртки"
        break;

        case -0:
        case 0:
        case 1:
        case 2:
        case 3:
        clothes = "пуховые куртки"
        break;

    default:
        clothes = "неверное число градуса"
        console.log("Вы ввели неверное число")
}

console.log(`Предлагается надеть: ${clothes}`)


