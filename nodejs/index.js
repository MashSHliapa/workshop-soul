import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(cors());

app.get('/decor', (req, res) => {
  res.json([
    {
      id: 1,
      image: 'https://i.ibb.co/KF68HdS/vase-sun.jpg',
      item: 'Ваза',
      name: 'Солнце',
      size: '50 x 50',
      material: 'шамотная глина, глазурь',
    },
    {
      id: 2,
      image: 'https://i.ibb.co/L5PZLQ7/vase-water.jpg',
      item: 'Ваза',
      name: 'Вода',
      size: '20 x 70',
      material: 'шамотная глина, глазурь',
    },
    {
      id: 3,
      image: 'https://i.ibb.co/Ch3MDWS/vase-dandelion.jpg',
      item: 'Ваза',
      name: 'Одуванчик',
      size: '50 x 60',
      material: 'шамотная глина, глазурь',
    },
    {
      id: 4,
      image: 'https://i.ibb.co/4gdHpyK/bowl-enco.jpg',
      item: 'Миска',
      name: 'Энсо',
      size: '150 x 150',
      material: 'шамотная глина, дерево, глазурь',
    },
  ]);
});

app.get('/runes', (req, res) => {
  res.json([
    {
      id: 1,
      image: 'https://i.ibb.co/gPW1BTv/rune-bereginya.jpg',
      item: 'Руна',
      name: 'Берегиня',
      size: '25 x 25',
      material: 'лосиный рог',
      description:
        'Берегиня - это красота, забота, плодородие, развитие, мудрость, умение создавать уют, окружать любовью, чувствовать и анализировать',
    },
    {
      id: 2,
      image: 'https://i.ibb.co/gMbspJG/rune-sunrise.jpg',
      item: 'Руна',
      name: 'Восход',
      size: '25 x 25',
      material: 'лосиный рог',
      description: 'Знак символизирует собой период роста, всходов, одним словом — наступление светлой полосы в жизни',
    },
    {
      id: 3,
      image: 'https://i.ibb.co/xfL3XbP/rune-lelya.jpg',
      item: 'Руна',
      name: 'Леля',
      size: '25 x 25',
      material: 'лосиный рог',
      description:
        'В отличии от Берегини, руна проявляет не материнские качества, а скорее те, что свойственны юной девушке в самом расцвете сил. Она уверена в себе, невероятно красивая, магнетически притягательная, обладает хорошей интуицией и привыкла брать от жизни то, что считает нужным. При приходе Лели человек может исполнить любое своё желание — достаточно лишь захотеть этого.',
    },
  ]);
});

app.get('/dreamCatchers', (req, res) => {
  res.json([
    {
      id: 1,
      image: 'https://i.ibb.co/p4cqKbJ/dreamcatcher-bear.jpg',
      item: 'Ловец снов',
      name: 'Медведь',
      size: '250 x 250',
      material: 'лоза, кожа натуральная',
    },
    {
      id: 2,
      image: 'https://i.ibb.co/BZH0bK8/dreamcatcher-fish.jpg',
      item: 'Ловец снов',
      name: 'Рыба',
      size: '250 x 250',
      material: 'лоза, кожа натуральная',
    },
  ]);
});

app.get('/talismans', (req, res) => {
  res.json([
    {
      id: 1,
      image: 'https://i.ibb.co/MhSfTR7/talisman-fish.jpg',
      item: 'Талисман',
      name: 'Карп',
      size: '30 x 20',
      material: 'красная глина',
      description: 'Карп олицетворяет мужественность, победу, стремление к цели и достижение результата',
    },
    {
      id: 2,
      image: 'https://i.ibb.co/hdh77wj/talisman-lada.jpg',
      item: 'Талисман',
      name: 'Лада',
      size: '15 x 25',
      material: 'красная глина',
      description: 'Лада – богиня жизни и красоты, любви и семьи, рождения и плодородия',
    },
    {
      id: 3,
      image: 'https://i.ibb.co/rw8wvyh/talisman-cat.jpg',
      item: 'Талисман',
      name: 'Котик',
      size: '25 x 25',
      material: 'красная глина',
      description:
        'Такой тотем научит нежности и обольстительности, пробудит внутреннюю и внешнюю красоту, станет проводником к женскому началу. Он поможет сделать характер более мягким, реакции вдумчивее, речь мелодичнее.',
    },
  ]);
});

app.get('/forgedProducts', (req, res) => {
  res.json([
    {
      id: 1,
      image: 'https://i.ibb.co/WG0XVqR/forgedknife-viking.jpg',
      item: 'Нож',
      name: 'Викинг',
      size: '25 x 250',
      material: 'сталь ШХ 15, рукоять из дуба',
    },
    {
      id: 2,
      image: 'https://i.ibb.co/yhbQXcq/forgetfork-medieval.jpg',
      item: 'Вилочка',
      name: 'Средневековая',
      size: '15 x 250',
      material: 'сталь ШХ 15',
    },
  ]);
});

app.get('/bijouterie', (req, res) => {
  res.json([
    {
      id: 1,
      image: 'https://i.ibb.co/N1WStMX/earrings-coil.jpg',
      item: 'Серьги',
      name: 'Виток',
      size: '30',
      material: 'натуральная кожа',
    },
    {
      id: 2,
      image: 'https://i.ibb.co/wWKcm79/earrings-twins.jpg',
      item: 'Серьги',
      name: 'Близнецы',
      size: '30',
      material: 'красная глина, глазурь',
    },
  ]);
});

app.get('/music', (req, res) => {
  res.json([
    {
      id: 1,
      image: 'https://i.ibb.co/wCdHsRL/whistle-frog.jpg',
      item: 'Свистулька',
      name: 'Лягушонок',
      size: '30 x 40',
      material: 'красная глина, акрил',
    },
    {
      id: 2,
      image: 'https://i.ibb.co/CMypCsY/xylophone-spring.jpg',
      item: 'Ксилофон',
      name: 'Весенний',
      size: '130',
      material: 'красная глина, глазурь',
    },
    {
      id: 3,
      image: 'https://i.ibb.co/ypx6LVm/whistle-wolf.jpg',
      item: 'Свистулька',
      name: 'Волчок',
      size: '40 x 50',
      material: 'красная глина, акрил',
    },
  ]);
});

app.get('/amulets', (req, res) => {
  res.json([
    {
      id: 1,
      image: 'https://i.ibb.co/C20JHw7/amulet-makosh.jpg',
      item: 'Оберег',
      name: 'Макошь',
      size: '60',
      material: 'красная глина, глазурь',
      description: 'Для достатка в доме и женского счастья',
    },
    {
      id: 2,
      image: 'https://i.ibb.co/KhbmmrM/amulet-chur.jpg',
      item: 'Оберег',
      name: 'Чур',
      size: '60',
      material: 'красная глина, глазурь',
      description: 'Вешается над входной дверью, от злых людей и негатива',
    },
  ]);
});

app.get('/lighting', (req, res) => {
  res.json([
    {
      id: 1,
      image: 'https://i.ibb.co/MPBBvhd/lighting-mushrooms1.jpg',
      item: 'Освещение',
      name: 'Осенние грибы',
      size: '500',
      material: 'дерево, стабилизированный мох',
    },
    {
      id: 2,
      image: 'https://i.ibb.co/MVYMRLK/lighting-mushrooms2.jpg',
      item: 'Освещение',
      name: 'Осенние грибы',
      size: '100 x 100',
      material: 'дерево, стекло, стабилизированный мох',
    },
  ]);
});

app.get('/newItemsAdd', (req, res) => {
  res.json([
    {
      id: 1,
      image: 'https://i.ibb.co/MhSfTR7/talisman-fish.jpg',
      item: 'Талисман',
      name: 'Карп',
      size: '30 x 20',
      material: 'красная глина',
      description: 'Карп олицетворяет мужественность, победу, стремление к цели и достижение результата',
    },
    {
      id: 2,
      image: 'https://i.ibb.co/CMypCsY/xylophone-spring.jpg',
      item: 'Ксилофон',
      name: 'Весенний',
      size: '130',
      material: 'красная глина, глазурь',
      description: 'Весенний ксилофон - прекрасное звучание, согревающее душу',
    },
    {
      id: 3,
      image: 'https://i.ibb.co/rw8wvyh/talisman-cat.jpg',
      item: 'Талисман',
      name: 'Котик',
      size: '25 x 25',
      material: 'красная глина',
      description:
        'Такой тотем научит нежности и обольстительности, пробудит внутреннюю и внешнюю красоту, станет проводником к женскому началу. Он поможет сделать характер более мягким, реакции вдумчивее, речь мелодичнее.',
    },
    {
      id: 4,
      image: 'https://i.ibb.co/yhbQXcq/forgetfork-medieval.jpg',
      item: 'Вилочка',
      name: 'Средневековая',
      size: '15 x 250',
      material: 'сталь ШХ 15',
      description: 'Старинный столовый прибор поможет окунуться в реальность средневековой жизни',
    },
    {
      id: 1,
      image: 'https://i.ibb.co/p4cqKbJ/dreamcatcher-bear.jpg',
      item: 'Ловец снов',
      name: 'Медведь',
      size: '250 x 250',
      material: 'лоза, кожа натуральная',
      description: 'Ловец снов обеспечит Вам крепкий здоровый сон',
    },
  ]);
});

app.listen(PORT, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`Server started on port ${PORT}`);
  }
});
