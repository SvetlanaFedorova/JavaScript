
"use strict";
/* 1. Задать температуру в градусах по Цельсию. Вывести в alert соответствующую температуру в градусах по Фаренгейту. 
Подсказка: расчет идет по формуле  Tf = (9 / 5) * Tc + 32, где Tf — температура по Фаренгейту, Tc — по Цельсию.*/

var Tc = 20;
var Tf = (9 / 5) * Tc + 32;
alert(Tf);


/*2. Объявить две переменные: admin и name. Записать в name строку "Василий"; Скопировать значение из name в admin.
Вывести admin (должно вывестись «Василий»).*/

var name = 'Василий';
var admin = name;
alert(admin);

/*3. Чему будет равно JS-выражение 1000 + "108"?*/

var num = 1000 + '108'; /* num = 1000108 потому что, Джава Скрипт при использовании оператора + и если операнды 
имеют разные типы данных строка и число -  по умолчанию приводит оперант числового типа к строковому и совершает операцию
конкатенации.


/*4. Самостоятельно разобраться с атрибутами тега script (async и defer).

defer
<p>...содержимое перед скриптом...</p>

<script defer src="https://javascript.info/article/script-async-defer/long.js?speed=1"></script>

<!-- отображается сразу же -->
<p>...содержимое после скрипта...</p>

async

Атрибут async означает, что скрипт абсолютно независим:

Страница не ждёт асинхронных скриптов, содержимое обрабатывается и отображается.
Событие DOMContentLoaded и асинхронные скрипты не ждут друг друга:
DOMContentLoaded может произойти как до асинхронного скрипта (если асинхронный скрипт завершит загрузку после того, как страница будет готова),
…так и после асинхронного скрипта (если он короткий или уже содержится в HTTP-кеше)
Остальные скрипты не ждут async, и скрипты casync не ждут другие скрипты.
*/
