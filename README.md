# Создание проекта

Expo - это фреймворк React Native, которая делает разработку мобильных приложений упрощенной. Этот фреймворк предоставляет маршрутизацию на основе файлов, стандартную библиотеку нативных модулей и многое другое.

Системные требования :

    - Node.js
    - Windows, MacOs или Linux

Для начала, нужно создать проект и для этого нужно использовать команду:

    create-expo-app

Эта команда упрощает процесс инициализации, предоставляя различные шаблоны для быстрого начала без необходимости ручной настройки.

Также можно использовать примеры Expo. Это небольшие приложения, каждое из которых демонстрирует определённую функцию или интеграцию, такие как Expo Router, Expo Widgets или экран камеры.

Для этого нужно добавить --example после команды создания проекта

    create-expo-app --example

# Настройка среды

В этом разделе можно выбрать, где и как начинать разрабатывать проект. Например, можно на физическом устройстве, можно и на эмуляторе. 

Насчет того, как разрабатывать, есть два варианта: Expo Go и билд для разработки.

    Expo Go — это игровая площадка, где студенты и ученики могут быстро попробовать Expo. 
    Билд для разработки — это сборка собственного приложения, включающая инструменты для разработчиков Expo.

# Начало разработки

Для запуска сервера, нужно выполнить эту команду:

    expo start

Затем появится QR-код в терминале. Нужно его отсканировать.

Затем можно попробовать внести изменения в файле **src/app/index.tsx.** Например, текст "Welcome to Expo" на "Hello World!"

    <ThemedView style={styles.heroSection}>
       <AnimatedIcon />
       <ThemedText type="title" style={styles.title}>
           Welcome to&nbsp;Expo // до
           Hello World! // после
       </ThemedText>
     </ThemedView>

Теперь текст должен быть измениться.

Структура файлового каталога выглядит следующим образом:

- src/app - Содержит навигацию приложения, которая основана на файлах.
- src/components - Содержит компоненты React Native, такие как themed-text.tsx, который создаёт текстовые элементы, использующие цветовую схему приложения в светлом и тёмном режимах.
- src/constants - Содержит theme.ts, который определяет цвета, шрифты и константы интервалов, используемые в приложении.
- src/hooks - Содержит React Hooks, что позволяет делиться общим поведением между компонентами.
- assets - Каталог ресурсов содержит папку expo.icon для иконки приложения iOS и подкаталог изображений с адаптивными файлами иконок Android
- scripts - Cодержит reset-project.js, который может выполняться с .
- app.json - Содержит настройки для проекта и называется конфигурацией приложения.
- package.json - Файл package.json содержит зависимости, скрипты и метаданные проекта.
- tsconfig.json - Содержит правила, которые TypeScript будет использовать для обеспечения безопасности типов на протяжении всего проекта.

# Следующий шаг

Теперь можно убрать стандартный код и начать новый проект. Для сброса проекта нужно выполнить следующую команду:

    run reset-project

Эта команда переместит существующие файлы в приложении в app-example, затем создаёт новую папку приложения с новым файлом index.tsx.

# Инструменты для разработки

Эти инструменты могут помочь на пути разработки приложений:

- Expo CLI - это инструмент разработки, который устанавливается автоматически вместе с пакетом при создании нового проекта.

- EAS CLI - Он используется для входа в ваш аккаунт Expo и компиляции приложения с помощью различных сервисов EAS, таких как Build, Update или Submit.

- Expo Doctor — это инструмент командной строки, используемый для диагностики проблем в вашем проекте Expo.

- Orbit - это приложение, которое позволяет устанавливать и запускать сборки и обновления EAS на устройство, запускать Snack-проекты, использовать локальные файлы для установки и запуска приложений, посмотреть список закреплённых проектов на вашей панели управления EAS.

Для протестирования приложений можно использовать Snack и Expo Go.

- Snack — это встроенная среда разработки, работающая аналогично Expo Go. Это отличный способ делиться фрагментами кода и экспериментировать с React Native, не скачивая инструменты на компьютер.

- Expo Go — это бесплатная открытая площадка для студентов и учащихся, чтобы попробовать React Native. Он работает на Android и iOS.

# Навигация

Основная библиотека React Native не включает встроенного навигационного решения, поэтому можно выбрать навигационную библиотеку, которая подходит лучше всего. Для приложений Expo и React Native обычно выбирают между React Navigation и Expo Router.

Но почему приложениям React Native необходимы библиотеки навигации?

Ядро React Native включает основные компоненты интерфейса: сенсорное управление, API устройства и сеть, но исключает хранилище, камеру, карты, большинство сенсоров устройства, и больше всего - **навигацию.**

- React Navigation — это навигационная библиотека на основе компонентов, широко используемая в экосистеме React Native. Он позволяет создавать навигаторы в виде стека, вкладок и боковых панелей полностью в коде, что дает возможность реализовывать сложные сценарии, пользовательские переходы и специфические для приложений шаблоны пользовательского интерфейса.

- Expo Router — это файловая библиотека маршрутизации для проектов Expo и React Native. Следуя правилам каталога приложений, файлы превращаются в маршруты и интегрируются с Expo for Expo CLI и пакетированием без дополнительной настройки.

## О React Native и обучающих материалах по Expo

В ней будут рассмотрены следующие темы:

- Создание приложения с использованием шаблона по умолчанию с включённым TypeScript
- Реализование раскладки нижних вкладок с двумя экранами с помощью Expo Router
- Разборка макета приложения и реализуйте его с помощью flexbox
- Использование системного интерфейса каждой платформы, чтобы выбрать изображение из медиабиблиотеки
- Создание модали стикера, используя компоненты и из React Native<Modal><FlatList>
- Добавление жестов касания для взаимодействия с наклейкой
- Использование сторонних библиотек, чтобы сделать скриншот и сохранить его на диск
- Понятие различий платформ между Android, iOS и вебом
- Прохождение процесса настройки строки статуса, заставки и иконки для завершения приложения

Приложение, которое мы будем строить - это приложение StickerSmash, которое работает на Android, iOS и вебе.

# Создание первого приложения

### Инициализация нового приложения Expo

Чтобы инициализировать новое приложение Expo, нужно использовать команду create-expo-app. Это командный инструмент для создания нового проекта React Native. 

    create-expo-app StickerSmash

    Select an Expo SDK version > SDK 57

    cd StickerSmash

Эта команда создаст новую папку проекта под названием StickerSmash, используя шаблон по умолчанию. Этот шаблон содержит необходимый шаблон и библиотеки, необходимые для создания нашего приложения, включая Expo Router, и позволяет нам тестировать приложение с Expo Go на наших устройствах.

### Скачивание материалов

Материалы можно скачать на офф. сайте Expo.

После скачивания:

1. Распакуйте архив и замените стандартные ассеты в папке your-project-name/assets/images.
2. Откройте каталог проекта в редакторе кода или IDE.

### Запуск reset-project

Это приложение можно создать с нуля, нужно просто выполнить команду reset-project

    run reset-project

После выполнения вышеуказанной команды в папке src/app остаются два файла (index.tsx и _layout.tsx). Предыдущие файлы из каталога src (включая компоненты, константы и крючки) перемещаются внутри папки примера скриптом.

### Запуск сервера

В каталоге проекта выполните следующую команду, чтобы запустить сервер разработки из терминала

    expo start

После выполнения вышеуказанной команды:

1. Сервер разработки запустится, и вы увидите QR-код внутри окна терминала.

2. Отсканируйте этот QR-код, чтобы открыть приложение на устройстве. На Android используйте опцию QR-кода Expo Go > Scan. На iOS используйте приложение камеры.

3. Чтобы запустить веб-приложение, нажмите в терминале. Веб-приложение откроется в браузере по умолчанию.

### Редактирование экрана индекса

Файл src/app/index.tsx является главной точкой входа. В React Native стилизация элементов выполняется с помощью JavaScript-объектов через компонент StyleSheet, а не через привычные CSS-файлы. Поддерживаются стандартные веб-форматы цветов (HEX, RGBA, HSL и именованные цвета).

Стили, применяемые к этим компонентам, используют объекты JavaScript, а не CSS, который используется в вебе. Однако многие свойства будут показаться знакомыми, если вы раньше пользовались CSS в интернете. 

Давайте изменим экран src/app/index.tsx:

1. Импортируйте из и создайте объект для определения наших пользовательских стилей.
2. Добавьте свойство с значением . Это меняет цвет фона.
3. Замените значение по умолчанию на «Главный экран».
4. Добавьте свойство с значением (белый) для изменения цвета текста

Код index.tsx

    import { Text, View,  StyleSheet } from 'react-native';

    export default function Index() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Home screen</Text>
        </View>
        );
    }

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#25292e',
            alignItems: 'center',
            justifyContent: 'center',
        },
        text: {
            color: '#ffffff',
        },
    });

После сохранения изменений они отправляются и применяются к запускающим приложениям, подключённым к серверу разработки

# Добавление навигации

### Основы Expo Router 

Expo Router - это фреймворк навигации на основе файлов для React Native и веб-приложений. Он управляет навигацией между экранами и использует одни и те же компоненты на нескольких платформах

Для начало нужно знать:

- **Каталог приложений**: Особая директория, содержащая только маршруты и их макеты.
- **Корневой макет**: Он определяет общие элементы интерфейса, такие как заголовки и панели вкладок, чтобы они были согласованы между разными маршрутами.
- **Правила имен файлов**: Имена индексных файлов, такие как index.tsx, совпадают с родительским каталогом и не добавляют сегмент пути.
- **Файл маршрута** экспортирует компонент React в качестве своего значения по умолчанию.
- Android, iOS и веб имеют единую навигационную структуру.

### Добавление нового экрана в стек

Для добавления нового экрана, необходимо создать новый файл с расширением **.tsx** в папку **src/app**. Вот пример кода экрана "about":

    import { Text, View, StyleSheet } from 'react-native';

    export default function AboutScreen() {
      return (
        <View style={styles.container}>
          <Text style={styles.text}>About screen</Text>
        </View>
      );
    }

    const styles = StyleSheet.create({
        container: {
          flex: 1,
          backgroundColor: '#25292e',
          justifyContent: 'center',
          alignItems: 'center',
      },
        text: {
          color: '#fff',
      },
    });

В файле _layout.tsx внутри src/app добавляем компонент "<Stack.Screen />" для экрана "about", чтобы он якобы существовал для приложения.

    import { Stack } from 'expo-router';

    export default function RootLayout() {
      return (
        <Stack>
          <Stack.Screen name="index" options={{ title: 'Home' }} />
          <Stack.Screen name="about" options={{ title: 'About' }} />
        </Stack>
      );
    }

### Навигация между экранами

Для навигации между экранами нужно использовать Expo Router:

1. Импортировать компонент внутри **src/app/index.tsx**
2. Добавить компонент в кнопку, которая направит в экран "About"
3. Добавить стиль в компонент. Он требует тех же реквизитов, что и компонент.

Пример кода index.tsx:

    import { Text, View, StyleSheet } from 'react-native';
    import { Link } from 'expo-router'; 

    export default function Index() {
        return (
        <View style={styles.container}>
        <Text style={styles.text}>Home screen</Text>
        <Link href="/about" style={styles.button}>
        Go to About screen
        </Link>
        </View>
        );
    }

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#25292e',
            alignItems: 'center',
            justifyContent: 'center',
        },
        text: {
            color: '#fff',
        },
        button: {
            fontSize: 20,
            textDecorationLine: 'underline',
            color: '#fff',
        },
    });

Теперь в приложении должен появиться кнопка для перехода в раздел "about".

### Добавление экрана ошибки 404

Если пользователь в веб-приложении введет маршрут, которого нет, то приложение может вылетать или отображать ошибку 404. Чтобы этого не произошло, нужно добавить экран не найденного маршрута. Для создания можно проделать те действия, которые использованы для создания экрана "about", но файл нужно назвать **+not-found.tsx**.

Пример кода +not-found.tsx:

    import { View, StyleSheet } from 'react-native';
    import { Link, Stack } from 'expo-router';

    export default function NotFoundScreen() {
      return (
        <>
          <Stack.Screen options={{ title: 'Oops! Not Found' }} />
          <View style={styles.container}>
            <Link href="/" style={styles.button}>
              Go back to Home screen!
            </Link>
          </View>
        </>
      );
    }

    const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: '#25292e',
        justifyContent: 'center',
        alignItems: 'center',
      },

      button: {
        fontSize: 20,
        textDecorationLine: 'underline',
        color: '#fff',
      },
    });

### Добавление навигатора в нижней части экрана

Добавление навигатора по нижней вкладке в наше приложение упростит переход между вкладками. Этот шаблон используется во многих социальных сетях, например: VK, Telegram, Whatsapp и т.п.

Для этого нужно:
1. Внутри директории src/spp нужно создать подпапку (tabs).
2. Создать файл _layout.tsx и переместить существующие файлы index.tsx и about.tsx внутри этой подпапки.

Внутри файла src/app/_layout.tsx нужно удалить существующие стеки и оставить только одну: 

    import { Stack } from 'expo-router';

    export default function RootLayout() {
      return (
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        </Stack>
      );
    }

Внутри файла src/app/_layout.tsx нужно добавить уже существующие стеки:

    import { Tabs } from 'expo-router';

    export default function TabLayout() {
      return (
        <Tabs>
          <Tabs.Screen name="index" options={{ title: 'Home' }} />
          <Tabs.Screen name="about" options={{ title: 'About' }} />
        </Tabs>
      );
    }

Теперь внизу экрана появятся кнопки вкладок. Чтобы исправить иконки, нужно остановить сервер и установить библиотеку **@expo/vector-icons**. Это можно сделать использовав следующую команду:

    expo install @expo/vector-icons

И добавить в файл src/app/(tabs)/_layout.tsx иконки для вкладок:

    import { Tabs } from 'expo-router';

    import Ionicons from '@expo/vector-icons/Ionicons';


    export default function TabLayout() {
      return (
        <Tabs
          screenOptions={{
            tabBarActiveTintColor: '#ffd33d',
          }}
        >
          <Tabs.Screen
            name="index"
            options={{
              title: 'Home',
              tabBarIcon: ({ color, focused }) => (
                <Ionicons name={focused ? 'home-sharp' : 'home-outline'} color={color} size={24} />
              ),
            }}
          />
          <Tabs.Screen
            name="about"
            options={{
              title: 'About',
              tabBarIcon: ({ color, focused }) => (
                <Ionicons name={focused ? 'information-circle' : 'information-circle-outline'} color={color} size={24}/>
              ),
            }}
          />
        </Tabs>
      );
    }


# Построение экрана

### Разборка экрана 

Прежде чем создавать этот экран с помощью кода, нужно разобрать его на основные элементы.

Есть два основных элемента:

- В центре экрана отображается большое изображение
- В нижней части экрана расположены две кнопки

Первая кнопка содержит несколько компонентов. Родительский элемент имеет жёлтую рамку и содержит иконку и текстовые компоненты внутри строки.

Теперь, когда интерфейс разобран на более мелкие участки, можно начать программирование.

### Показ изображения

Мы будем использовать библиотеку для отображения изображения в приложении. Он предоставляет кроссплатформенный компонент для загрузки и рендеринга изображения.

Компонент Image принимает источник изображения в качестве своего значения. Исходный код может быть как статическим активом, так и URL. Например, исходный код, требуемый из каталога ассетов/изображений, является статичным. Он также может поступать из сети как объект.

Чтобы использовать компонент Image в файле src/app/(tabs)/index.tsx:

1. Импортируйте из библиотеки.
2. Создайте переменную, чтобы использовать ассеты/изображения/background-image.png файл в качестве проппа компонента.

Пример кода src/app/(tabs)/index.tsx:

    import { View, StyleSheet } from 'react-native';
    import { Image } from 'expo-image'; 
    
    const PlaceholderImage = require('@/assets/images/background-image.png');

    export default function Index() {
      return (
        <View style={styles.container}>
          <View style={styles.imageContainer}>
            <Image source={PlaceholderImage} style={styles.image} />
          </View>
        </View>
      );
    }

    const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: '#25292e',
        alignItems: 'center',
      },
      imageContainer: {
        flex: 1,
      },
      image: {
        width: 320,
        height: 440,
        borderRadius: 18,
      },
    });

### Разделение компонентов на файлы

Давайте разделим код на несколько файлов по мере добавления новых компонентов на этот экран. В течение этого урока мы будем использовать каталог компонентов для создания пользовательских компонентов.

1. Создайте каталог components внутри src, а внутри него — файл image-viewer.tsx.
2. Переместите код, чтобы отображать изображение в этом файле вместе со стилями.

Пример кода src/components/image-viewer.tsx:

    import { ImageSourcePropType, StyleSheet } from 'react-native';
    import { Image } from 'expo-image';

    type Props = {
      imgSource: ImageSourcePropType;
    };

    export default function ImageViewer({ imgSource }: Props) {
      return <Image source={imgSource} style={styles.image} />;
    }

    const styles = StyleSheet.create({
      image: {
        width: 320,
        height: 440,
        borderRadius: 18,
      },
    });

Потом импортируем его в src/app/(tabs)/index.tsx:

    import { StyleSheet, View } from 'react-native';

    import ImageViewer from '@/components/image-viewer'; 

    const PlaceholderImage = require('@/assets/images/background-image.png');

    export default function Index() {
      return (
        <View style={styles.container}>
          <View style={styles.imageContainer}>
            <ImageViewer imgSource={PlaceholderImage} />
          </View>
        </View>
      );
    }

    const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: '#25292e',
        alignItems: 'center',
      },
      imageContainer: {
        flex: 1,
      },
    });

### Создание кнопок с помощью Pressable

React Native включает несколько различных компонентов для обработки сенсорных событий, но **Pressable** рекомендуется за свою гибкость. Он может обнаруживать одиночные нажатия, долгие нажатия, запускать отдельные события при нажатии и отпускании кнопки и многое другое.

В дизайне нам нужно создать две кнопки. У каждого свой стиль и ярлык. Давайте начнём с создания многоразового компонента для этих кнопок. Создайте файл button.tsx внутри каталога src/components с помощью следующего кода:

    import { StyleSheet, View, Pressable, Text } from 'react-native';

    type Props = {
      label: string;
    };

    export default function Button({ label }: Props) {
      return (
        <View style={styles.buttonContainer}>
          <Pressable style={styles.button} onPress={() => alert('You pressed a button.')}>
            <Text style={styles.buttonLabel}>{label}</Text>
          </Pressable>
        </View>
      );
    }

    const styles = StyleSheet.create({
      buttonContainer: {
        width: 320,
        height: 68,
        marginHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 3,
      },
      button: {
        borderRadius: 10,
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
      },
      buttonLabel: {
        color: '#fff',
        fontSize: 16,
      },
    });

Приложение показывает оповещение при нажатии любой из кнопок на экране. Это происходит из-за призывов к его реквизиту. Давайте импортируем этот компонент в файл src/app/(tabs)/index.tsx и добавим стили, которые инкапсулируют эти кнопки:

    import { View, StyleSheet } from 'react-native';

    import Button from '@/components/button'; 
    import ImageViewer from '@/components/image-viewer';

    const PlaceholderImage = require("@/assets/images/background-image.png");

    export default function Index() {
      return (
        <View style={styles.container}>
          <View style={styles.imageContainer}>
            <ImageViewer imgSource={PlaceholderImage} />
          </View>
          <View style={styles.footerContainer}>
            <Button label="Choose a photo" />
            <Button label="Use this photo" />
          </View>
        </View>
      );
    }

    const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: '#25292e',
        alignItems: 'center',
      },
      imageContainer: {
        flex: 1,
      },
      footerContainer: {
        flex: 1 / 3,
        alignItems: 'center',
      },
    });

Теперь вторая кнопка с надписью «Использовать эту фотографию» должна напоминать настоящую кнопку из дизайна. Однако первая кнопка требует большего стиля, чтобы соответствовать дизайну.

### Улучшение компонента многоразовой кнопки

Кнопка «Выбрать фото» требует другого стиля, чем кнопка «Использовать эту фотографию», поэтому мы добавим новый реквизит для темы кнопок, который позволит применить тему. Эта кнопка также имеет иконку перед этикеткой. Мы используем иконку из библиотеки.

Для этого нужно изменить src/components/button.tsx, чтобы добавить следующий фрагмент кода:

    import { StyleSheet, View, Pressable, Text } from 'react-native';
    import FontAwesome from '@expo/vector-icons/FontAwesome';

    type Props = {
      label: string;
      theme?: 'primary';
    };

    export default function Button({ label, theme }: Props) {
      if (theme === 'primary') {
        return (
          <View
            style={[
              styles.buttonContainer,
              { borderWidth: 4, borderColor: '#ffd33d', borderRadius: 18 },
            ]}>
            <Pressable
              style={[styles.button, { backgroundColor: '#fff' }]}
              onPress={() => alert('You pressed a button.')}>
              <FontAwesome name="picture-o" size={18} color="#25292e" style={styles.buttonIcon} />
              <Text style={[styles.buttonLabel, { color: '#25292e' }]}>{label}</Text>
            </Pressable>
          </View>
        );
      }

      return (
        <View style={styles.buttonContainer}>
          <Pressable style={styles.button} onPress={() => alert('You pressed a button.')}>
            <Text style={styles.buttonLabel}>{label}</Text>
          </Pressable>
        </View>
      );
    }

    const styles = StyleSheet.create({
      buttonContainer: {
        width: 320,
        height: 68,
        marginHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 3,
      },
      button: {
        borderRadius: 10,
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
      },
      buttonIcon: {
        paddingRight: 8,
      },
      buttonLabel: {
        color: '#fff',
        fontSize: 16,
      },
    });
    
Что делает вышеуказанный код?

- Кнопка основной темы использует встроенные стили, которые переопределяют стили, определённые в предмете,  непосредственно передающем в реквизит.
- Компонент в основной теме использует свойство с значением, чтобы задать фон кнопки белым. Если добавить это свойство к стилю, значение цвета фона будет установлено как для основной, так и для нестилизованной.
- Встроенные стили используют JavaScript и переопределяют стандартные стили для определённого значения.

Теперь изменяем файл src/app/(tabs)/index.tsx, чтобы использовать проп на первой кнопке:

    import { View, StyleSheet } from 'react-native';

    import Button from '@/components/button';
    import ImageViewer from '@/components/image-viewer';

    const PlaceholderImage = require('@/assets/images/background-image.png');

    export default function Index() {
      return (
        <View style={styles.container}>
          <View style={styles.imageContainer}>
            <ImageViewer imgSource={PlaceholderImage} />
          </View>
          <View style={styles.footerContainer}>
            <Button theme="primary" label="Choose a photo" />
            <Button label="Use this photo" />
          </View>
        </View>
      );
    }

    const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: '#25292e',
        alignItems: 'center',
      },
      imageContainer: {
        flex: 1,
      },
      footerContainer: {
        flex: 1 / 3,
        alignItems: 'center',
      },
    });

# Использование набора изображений

### Установка expo-image-picker

Чтобы установить библиотеку, остановите сервер разработки, нажав + в терминале, затем выполните следующую команду:

    expo install expo-image-picker

### Выбор изображения из галереи устройства

expo-image-picker предоставляет способ отображения системного интерфейса путём выбора изображения или видео из медиатеки устройства. Мы используем основную тематическую кнопку, созданную в предыдущей главе, чтобы выбрать изображение из медиабиблиотеки устройства и создать функцию запуска библиотеки изображений устройства для реализации этой функции

В src/app/(tabs)/index.tsx импортируйте библиотеку и создайте функцию внутри компонента:

    // остальные импорты лучше не трогать
    import * as ImagePicker from 'expo-image-picker';

    export default function Index() {
      const pickImageAsync = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ['images'],
          allowsEditing: true,
          quality: 1,
        });

        if (!result.canceled) {
          console.log(result);
        } else {
          alert('You did not select any image.');
        }
      };

      // остальной код остается тем же
    }

Что делает вышеуказанный код?

- Он получает объект для указания различных опций. Этот объект — это launchImageLibraryAsync() Объект, который мы проходим при вызове метода.
- При установке на , пользователь может обрезать изображение во время выбора на Android и iOS.

### Обновление компонента кнопок

При нажатии основной кнопки мы вызовем функцию компонента. Обновите проп компонента в src/components/button.tsx:

    // ... начало кода
    type Props = {
      label: string;
      theme?: 'primary';
      onPress?: () => void;
    };

    export default function Button({ label, theme, onPress }: Props) {
      if (theme === 'primary') {
        return (
          <View
            style={[
              styles.buttonContainer,
              { borderWidth: 4, borderColor: '#ffd33d', borderRadius: 18 },
            ]}>
            <Pressable style={[styles.button, { backgroundColor: '#fff' }]} onPress={onPress}>
              <FontAwesome name="picture-o" size={18} color="#25292e" style={styles.buttonIcon} />
              <Text style={[styles.buttonLabel, { color: '#25292e' }]}>{label}</Text>
            </Pressable>
          </View>
        );
      }
    // ... продолжение кода

В src/app/(tabs)/index.tsx добавьте функцию в проп на первом:

    // ... начало кода
    export default function Index() {
      const pickImageAsync = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ['images'],
          allowsEditing: true,
          quality: 1,
        });

        if (!result.canceled) {
          console.log(result);
        } else {
          alert('You did not select any image.');
        }
      };

      return (
        <View style={styles.container}>
          <View style={styles.imageContainer}>
            <ImageViewer imgSource={PlaceholderImage} />
          </View>
          <View style={styles.footerContainer}>
            <Button theme="primary" label="Choose a photo" onPress={pickImageAsync} />
            <Button label="Use this photo" />
          </View>
        </View>
      );
    }
    // ... продолжение кода

Функция вызывает и затем обрабатывает результат. Метод возвращает объект с информацией о выбранном изображении.

### Использование выбранного изображения

Объект предоставляет массив выбранного изображения. Давайте возьмём это значение из picker изображений и используем его, чтобы показать выбранное изображение в приложении.

Измените файл src/app/(tabs)/index.tsx:

1. Объявим переменную состояния, вызванную с помощью **selectedImage useState** крючок от React. Мы используем эту переменную состояния, чтобы сохранить URI выбранного изображения.
2. Обновите функцию, чтобы сохранить URI изображения в переменной состояния. **pickImageAsync() selectedImage**
3. Передайте его как реквизит компоненту. **selectedImage ImageViewer**

Передайте реквизит компоненту, чтобы отобразить выбранное изображение вместо временного изображения. **selectedImage ImageViewer**

1. Модифицируйте файл src/components/image-viewer.tsx, чтобы он принял проп. **selectedImage**
2. Источник изображения становится длинным, поэтому давайте также переместим его в отдельную переменную под названием **imageSource**.
3. Передайте как значение пропеллера на компоненте **imageSource sourceImage**

Пример кода src/components/image-viewer.tsx:

    import { ImageSourcePropType, StyleSheet } from 'react-native';
    import { Image } from 'expo-image';

    type Props = {
      imgSource: ImageSourcePropType;
      selectedImage?: string;
    };

    export default function ImageViewer({ imgSource, selectedImage }: Props) {
      const imageSource = selectedImage ? { uri: selectedImage } : imgSource;

      return <Image source={imageSource} style={styles.image} />;
    }

    const styles = StyleSheet.create({
      image: {
        width: 320,
        height: 440,
        borderRadius: 18,
      },
    });

В приведённом выше фрагменте компонент Image использует условный оператор для загрузки исходного источника изображения. Выбранное изображение — это Строка, а не локальный актив, как заполняющее изображение.

# Создание модали

### Объявление переменной состояния для отображения кнопок

Перед внедрением модала мы добавим три новые кнопки. Эти кнопки видны после того, как пользователь выбирает изображение из медиабиблиотеки или использует заполняющее изображение. Одна из этих кнопок запускает модаль отбора эмодзи.

В src/app/(tabs)/index.tsx:

1. Объявите переменную булевого состояния, , чтобы показать или скрыть кнопки, открывающие модаль, а также несколько других опций. Когда экран приложения загружается, мы устанавливаем так, чтобы опции не отображались перед выбором изображения. Когда пользователь выбирает изображение или использует заполнительное изображение, мы устанавливаем его на 
2. Обновите функцию, чтобы установить значение в после выбора изображения.
3. Обновите кнопку без темы, добавив реквизит со следующим значением.

Пример кода:

  // ... начало кода
  export default function Index() {
    const [selectedImage, setSelectedImage] = useState<string | undefined>(undefined);
    const [showAppOptions, setShowAppOptions] = useState<boolean>(false);

    const pickImageAsync = async () => {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ['images'],
        allowsEditing: true,
        quality: 1,
      });

      if (!result.canceled) {
        setSelectedImage(result.assets[0].uri);
        setShowAppOptions(true);
      } else {
        alert('You did not select any image.');
      }
    };

    return (
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <ImageViewer imgSource={PlaceholderImage} selectedImage={selectedImage} />
        </View>
        {showAppOptions ? (
          <View />
        ) : (
          <View style={styles.footerContainer}>
            <Button theme="primary" label="Choose a photo" onPress={pickImageAsync} />
            <Button label="Use this photo" onPress={() => setShowAppOptions(true)} />
          </View>
        )}
      </View>
      );
    }
    // ... продолжение кода

В приведённом выше фрагменте мы рендерим компонент на основе значения и перемещаем кнопки в блоке тернарного оператора. Когда значение равен , отобразите пустую компоненту. Мы рассмотрим это состояние на следующем этапе.

Теперь мы можем удалить на компоненте и обновить проп при рендеринге второй кнопки в src/components/button.tsx:

    <Pressable style={styles.button}  onPress={onPress}>

### Добавление кнопок

Внутри каталога src/components создайте новый файл circle-button.tsx с следующим кодом:

    import { View, Pressable, StyleSheet } from 'react-native';
    import MaterialIcons from '@expo/vector-icons/MaterialIcons';

    type Props = {
      onPress: () => void;
    };

    export default function CircleButton({ onPress }: Props) {
      return (
        <View style={styles.circleButtonContainer}>
          <Pressable style={styles.circleButton} onPress={onPress}>
            <MaterialIcons name="add" size={38} color="#25292e" />
          </Pressable>
        </View>
      );
    }

    const styles = StyleSheet.create({
      circleButtonContainer: {
        width: 84,
        height: 84,
        marginHorizontal: 60,
        borderWidth: 4,
        borderColor: '#ffd33d',
        borderRadius: 42,
        padding: 3,
      },
      circleButton: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 42,
        backgroundColor: '#fff',
      },
    });

Для отображения значка плюса эта кнопка использует иконки, установленные из библиотеки @expo/vector-icons.

Две другие кнопки также используются для отображения вертикально выровненных текстовых меток и иконок. Создайте файл с именем icon-button.tsx внутри каталога src/components. Этот компонент принимает три реквизита:

- icon: название, соответствующее иконке библиотеки. 
- label: текстовая метка, отображаемая на кнопке.
- onPress: эта функция вызывается, когда пользователь нажимает кнопку.

      import { Pressable, StyleSheet, Text } from 'react-native';
      import MaterialIcons from '@expo/vector-icons/MaterialIcons';

      type Props = {
        icon: keyof typeof MaterialIcons.glyphMap;
        label: string;
        onPress: () => void;
      };

      export default function IconButton({ icon, label, onPress }: Props) {
        return (
          <Pressable style={styles.iconButton} onPress={onPress}>
            <MaterialIcons name={icon} size={24} color="#fff" />
            <Text style={styles.iconButtonLabel}>{label}</Text>
          </Pressable>
        );
      }

      const styles = StyleSheet.create({
        iconButton: {
          justifyContent: 'center',
          alignItems: 'center',
        },
        iconButtonLabel: {
          color: '#fff',
          marginTop: 12,
        },
      });

Внутри src/app/(tabs)/index.tsx:

1. Импортируйте компоненты и для их отображения.
1. Добавьте три временных функции для этих кнопок. Функция срабатывает при нажатии кнопки сброса, вызывая повторное появление кнопки выбора изображения. Функционал для остальных двух функций мы добавим позже.

        import IconButton from '@/components/icon-button';
        import CircleButton from '@/components/circle-button';

         const onReset = () => {
            setShowAppOptions(false);
          };

          const onAddSticker = () => {
            // we will implement this later
          };

          const onSaveImageAsync = async () => {
            // we will implement this later
          };

          return (
            <View style={styles.container}>
              <View style={styles.imageContainer}>
                <ImageViewer imgSource={PlaceholderImage} selectedImage={selectedImage} />
            </View>
            {showAppOptions ? (
                <View style={styles.optionsContainer}>
                  <View style={styles.optionsRow}>
                    <IconButton icon="refresh" label="Reset" onPress={onReset} />
                    <CircleButton onPress={onAddSticker} />
                    <IconButton icon="save-alt" label="Save" onPress={onSaveImageAsync} />
                  </View>
                </View>
              ) : (
                <View style={styles.footerContainer}>
                  <Button theme="primary" label="Choose a photo" onPress={pickImageAsync} />
                  <Button label="Use this photo" onPress={() => setShowAppOptions(true)} />
                </View>
              )}
            </View>
          );
        }

        const styles = StyleSheet.create({
          container: {
            flex: 1,
            backgroundColor: '#25292e',
            alignItems: 'center',
          },
          imageContainer: {
            flex: 1,
          },
          footerContainer: {
            flex: 1 / 3,
            alignItems: 'center',
          },
          optionsContainer: {
            position: 'absolute',
            bottom: 80,
          },
          optionsRow: {
            alignItems: 'center',
            flexDirection: 'row',
          },
        });

### Создание модали с отбором эмодзи 

Модаль позволяет пользователю выбрать эмодзи из списка доступных эмодзи. Создайте файл emoji-picker.tsx внутри каталога src/components. Этот компонент принимает три реквизита:

- isVisible: булев показатель для определения состояния видимости модаля.
- onClose: функция для закрытия модаля.
- children: позже использовался для отображения списка эмодзи.
```
import { Modal, View, Text, Pressable, StyleSheet } from 'react-native';
import { PropsWithChildren } from 'react';\
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

type Props = PropsWithChildren<{
  isVisible: boolean;
  onClose: () => void;
}>;

export default function EmojiPicker({ isVisible, children, onClose }: Props) {
  return (
    <View>
      <Modal animationType="slide" transparent={true} visible={isVisible}>
        <View style={styles.modalContent}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Choose a sticker</Text>
            <Pressable onPress={onClose}>
              <MaterialIcons name="close" color="#fff" size={22} />
            </Pressable>
          </View>
          {children}
        </View>
      </Modal>
    </View>
   );
}

const styles = StyleSheet.create({
  modalContent: {
    height: '25%',
    width: '100%',
    backgroundColor: '#25292e',
    borderTopRightRadius: 18,
    borderTopLeftRadius: 18,
    position: 'absolute',
    bottom: 0,
  },
  titleContainer: {
    height: '16%',
    backgroundColor: '#464C55',
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    color: '#fff',
    fontSize: 16,
  },
});

```
Давайте узнаем, что делает вышеуказанный код:

- Компонент отображает заголовок и кнопку закрытия.
- Его пропеллер принимает значение и определяет, открыт ли модаль или закрыт 
- Его проп — булево значение, которое определяет, заполняет ли модаль весь обзор.
- Его реквизит определяет, как он входит и выходит из экрана. В данном случае он скользит снизу экрана. 
- Наконец, при нажатии кнопки закрытия пользователь вызывает проп EmojiPicker 

Теперь давайте изменим src/app/(tabs)/index.tsx:

1. Импортируйте компонент EmojiPicker
2. Создайте переменную состояния с помощью этого хука. Его стандартное значение — , которое скрывает модаль до тех пор, пока пользователь не нажмёт кнопку для его открытия. isModalVisible useState false
3. Замените комментарий в функции, чтобы обновить переменную до момента, когда пользователь нажимает кнопку. Это откроет отбор эмодзи. onAddSticker() isModalVisible true
4. Создайте функцию для обновления переменной состояния. onModalClose() isModalVisible
5. Разместите компонент внизу компонента. EmojiPicker Index

```
import { View, StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { useState } from 'react';

import Button from '@/components/button';
import ImageViewer from '@/components/image-viewer';
import IconButton from '@/components/icon-button';
import CircleButton from '@/components/circle-button';

import EmojiPicker from '@/components/emoji-picker';


const PlaceholderImage = require('@/assets/images/background-image.png');

export default function Index() {
  const [selectedImage, setSelectedImage] = useState<string | undefined>(undefined);
  const [showAppOptions, setShowAppOptions] = useState<boolean>(false);
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images'],
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
      setShowAppOptions(true);
    } else {
      alert('You did not select any image.');
    }
  };

  const onReset = () => {
    setShowAppOptions(false);
  };

  const onAddSticker = () => {
    setIsModalVisible(true);
  };

  const onModalClose = () => {
    setIsModalVisible(false);
  };

  const onSaveImageAsync = async () => {
    // we will implement this later
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer imgSource={PlaceholderImage} selectedImage={selectedImage} />
      </View>
      {showAppOptions ? (
        <View style={styles.optionsContainer}>
          <View style={styles.optionsRow}>
            <IconButton icon="refresh" label="Reset" onPress={onReset} />
            <CircleButton onPress={onAddSticker} />
            <IconButton icon="save-alt" label="Save" onPress={onSaveImageAsync} />
          </View>
        </View>
      ) : (
        <View style={styles.footerContainer}>
          <Button theme="primary" label="Choose a photo" onPress={pickImageAsync} />
          <Button label="Use this photo" onPress={() => setShowAppOptions(true)} />
        </View>
      )}
      <EmojiPicker isVisible={isModalVisible} onClose={onModalClose}>
        {/* Emoji list component will go here */}
      </EmojiPicker>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
  },
  imageContainer: {
    flex: 1,
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: 'center',
  },
  optionsContainer: {
    position: 'absolute',
    bottom: 80,
  },
  optionsRow: {
    alignItems: 'center',
    flexDirection: 'row',
  },
});
```

### Показ списка эмодзи

Давайте добавим горизонтальный список эмодзи в содержимое модаля. Мы используем компонент FlatList от React Native для этого.

Создайте файл emoji-list.tsx внутри каталога src/components и добавьте следующий код:

```
import { useState } from 'react';
import { ImageSourcePropType, StyleSheet, FlatList, Platform, Pressable } from 'react-native';
import { Image } from 'expo-image';

type Props = {
  onSelect: (image: ImageSourcePropType) => void;
  onCloseModal: () => void;
};

export default function EmojiList({ onSelect, onCloseModal }: Props) {
  const [emoji] = useState<ImageSourcePropType[]>([
    require("@/assets/images/emoji1.png"),
    require("@/assets/images/emoji2.png"),
    require("@/assets/images/emoji3.png"),
    require("@/assets/images/emoji4.png"),
    require("@/assets/images/emoji5.png"),
    require("@/assets/images/emoji6.png"),
  ]);

  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={Platform.OS === 'web'}
      data={emoji}
      contentContainerStyle={styles.listContainer}
      renderItem={({ item, index }) => (
        <Pressable
          onPress={() => {
            onSelect(item);
            onCloseModal();
          }}>
          <Image source={item} key={index} style={styles.image} />
        </Pressable>
      )}
    />
  );
}

const styles = StyleSheet.create({
  listContainer: {
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  image: {
    width: 100,
    height: 100,
    marginRight: 20,
  },
});

```

Давайте узнаем, что делает вышеуказанный код:

- Компонент выше отображает все изображения эмодзи с помощью компонента, обёрнутого . Позже мы улучшим её, чтобы пользователь мог нажать на эмодзи на экране, чтобы он выглядел как стикер на изображении.
- Он также принимает массив элементов, предоставленных переменной массива, в качестве значения пропа. Реквизит забирает предмет из и возвращает его из списка. Наконец, мы добавили компоненты для отображения этого предмета.
- Реквизит отображает список горизонтально, а не вертикально. Он использует модуль React Native для проверки значения и отображения горизонтальной полоски прокрутки на вебе.

Теперь обновите src/app/(tabs)/index.tsx, чтобы импортировать компонент, и заменить комментарии внутри компонента следующим фрагментом кода:

```
import { ImageSourcePropType, View, StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { useState } from 'react';

import Button from '@/components/button';
import ImageViewer from '@/components/image-viewer';
import IconButton from '@/components/icon-button';
import CircleButton from '@/components/circle-button';
import EmojiPicker from '@/components/emoji-picker';

import EmojiList from '@/components/emoji-list';


const PlaceholderImage = require('@/assets/images/background-image.png');

export default function Index() {
  const [selectedImage, setSelectedImage] = useState<string | undefined>(undefined);
  const [showAppOptions, setShowAppOptions] = useState<boolean>(false);
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [pickedEmoji, setPickedEmoji] = useState<ImageSourcePropType | undefined>(undefined);

  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images'],
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
      setShowAppOptions(true);
    } else {
      alert('You did not select any image.');
    }
  };

  const onReset = () => {
    setShowAppOptions(false);
  };

  const onAddSticker = () => {
    setIsModalVisible(true);
  };

  const onModalClose = () => {
    setIsModalVisible(false);
  };

  const onSaveImageAsync = async () => {
    // we will implement this later
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer imgSource={PlaceholderImage} selectedImage={selectedImage} />
      </View>
      {showAppOptions ? (
        <View style={styles.optionsContainer}>
          <View style={styles.optionsRow}>
            <IconButton icon="refresh" label="Reset" onPress={onReset} />
            <CircleButton onPress={onAddSticker} />
            <IconButton icon="save-alt" label="Save" onPress={onSaveImageAsync} />
          </View>
        </View>
      ) : (
        <View style={styles.footerContainer}>
          <Button theme="primary" label="Choose a photo" onPress={pickImageAsync} />
          <Button label="Use this photo" onPress={() => setShowAppOptions(true)} />
        </View>
      )}
      <EmojiPicker isVisible={isModalVisible} onClose={onModalClose}>
        <EmojiList onSelect={setPickedEmoji} onCloseModal={onModalClose} />
      </EmojiPicker>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
  },
  imageContainer: {
    flex: 1,
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: 'center',
  },
  optionsContainer: {
    position: 'absolute',
    bottom: 80,
  },
  optionsRow: {
    alignItems: 'center',
    flexDirection: 'row',
  },
});
```

В компоненте проп выбирает эмодзи, а после его выбора закрывает модаль.

### Показ выбранных эмодзи

Теперь наклеим наклейку с эмодзи на изображение. Создайте новый файл в каталоге src/components и назовите его emoji-sticker.tsx. Затем добавьте следующий код:

```
import { ImageSourcePropType, View } from 'react-native';
import { Image } from 'expo-image';

type Props = {
  imageSize: number;
  stickerSource: ImageSourcePropType;
};

export default function EmojiSticker({ imageSize, stickerSource }: Props) {
  return (
    <View style={{ top: -350 }}>
      <Image source={stickerSource} style={{ width: imageSize, height: imageSize }} />
    </View>
  );
}
```

Этот компонент получает две характеристики:

- imageSize: значение, определённое внутри компонента. Мы используем это значение в следующей главе, чтобы масштабировать размер изображения при нажатии.
- stickerSource: источник выбранного эмодзи.

Импортируйте этот компонент в файл src/app/(tabs)/index.tsx и обновите компонент, чтобы на изображении отображалась наклейка эмодзи. Мы проверим, если состояние не является undefined:

```
import { ImageSourcePropType, View, StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { useState } from 'react';

import Button from '@/components/button';
import ImageViewer from '@/components/image-viewer';
import IconButton from '@/components/icon-button';
import CircleButton from '@/components/circle-button';
import EmojiPicker from '@/components/emoji-picker';
import EmojiList from '@/components/emoji-list';
import EmojiSticker from '@/components/emoji-sticker';

const PlaceholderImage = require('@/assets/images/background-image.png');

export default function Index() {
  const [selectedImage, setSelectedImage] = useState<string | undefined>(undefined);
  const [showAppOptions, setShowAppOptions] = useState<boolean>(false);
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [pickedEmoji, setPickedEmoji] = useState<ImageSourcePropType | undefined>(undefined);


  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images'],
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
      setShowAppOptions(true);
    } else {
      alert('You did not select any image.');
    }
  };

  const onReset = () => {
    setShowAppOptions(false);
  };

  const onAddSticker = () => {
    setIsModalVisible(true);
  };

  const onModalClose = () => {
    setIsModalVisible(false);
  };

  const onSaveImageAsync = async () => {
    // we will implement this later
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer imgSource={PlaceholderImage} selectedImage={selectedImage} />
        {pickedEmoji && <EmojiSticker imageSize={40} stickerSource={pickedEmoji} />}
      </View>
      {showAppOptions ? (
        <View style={styles.optionsContainer}>
          <View style={styles.optionsRow}>
            <IconButton icon="refresh" label="Reset" onPress={onReset} />
            <CircleButton onPress={onAddSticker} />
            <IconButton icon="save-alt" label="Save" onPress={onSaveImageAsync} />
          </View>
        </View>
      ) : (
        <View style={styles.footerContainer}>
          <Button theme="primary" label="Choose a photo" onPress={pickImageAsync} />
          <Button label="Use this photo" onPress={() => setShowAppOptions(true)} />
        </View>
      )}
      <EmojiPicker isVisible={isModalVisible} onClose={onModalClose}>
        <EmojiList onSelect={setPickedEmoji} onCloseModal={onModalClose} />
      </EmojiPicker>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
  },
  imageContainer: {
    flex: 1,
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: 'center',
  },
  optionsContainer: {
    position: 'absolute',
    bottom: 80,
  },
  optionsRow: {
    alignItems: 'center',
    flexDirection: 'row',
  },
});
```

# Жесты

Жесты — отличный способ обеспечить интуитивно понятный пользовательский опыт в приложении. Библиотека React Native Gesture Handler предоставляет встроенные компоненты, способные обрабатывать жесты. Он распознаёт панорамирование, нажатие, вращение и другие жесты с помощью встроенной системы сенсорного управления платформой.

### Добавление GestureHandlerRootView

Чтобы взаимодействие жестов работало в приложении, мы рендерим сверху компонента. Замените компонент корневого уровня в src/app/(tabs)/index.tsx на GestureHandlerRootView

```
// ... rest of the import statements remain same
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function Index() {
  return (
    <GestureHandlerRootView style={styles.container}>
      {/* ...rest of the code remains */}
    </GestureHandlerRootView>
  )
}
```

### Использование анимированных компонентов

Компонент смотрит на проп компонента и определяет, какие значения анимировать, а также применять обновления для создания анимации. Reanimated экспортирует анимированные компоненты, такие как Animated.View, Animated.Text, или Animated.ScrollView. Мы применим анимации к компоненту, чтобы двойной нажатие работало.
 
1. Откройте файл emoji-sticker.tsx в каталоге src/components. Внутри него импортируйте из библиотеки для использования анимированных компонентов.Animatedreact-native-reanimated
2. Замените компонент на Animated.Image

```
import { ImageSourcePropType, View } from 'react-native';
import Animated from 'react-native-reanimated';

type Props = {
  imageSize: number;
  stickerSource: ImageSourcePropType;
};

export default function EmojiSticker({ imageSize, stickerSource }: Props) {
  return (
    <View style={{ top: -350 }}>
      <Animated.Image
        source={stickerSource}
        resizeMode="contain"
        style={{ width: imageSize, height: imageSize }}
      />
    </View>
  );
}
```

### Жест нажатия

React Native Gesture Handler позволяет добавлять поведение при обнаружении касания, например, при двойном нажатии.

В файле src/components/emoji-sticker.tsx:

1. Импортитруйте Gesture и GestureDetector от react-native-gesture-handler.
2. Чтобы распознать нажатие наклейки, импортируйте useAnimatedStyle, seSharedValue, withSpring от react-native-reanimated — анимировать стиль Animated.Image.
3. Внутри компонента создайте ссылку, вызванную с помощью крючка. Он возьмёт значение в качестве начального значения. 

```
// ...rest of the import statements remain same
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';

export default function EmojiSticker({ imageSize, stickerSource }: Props) {
  const scaleImage = useSharedValue(imageSize);

  return (
    // ...rest of the code remains same
  )
}
```

Создание общей ценности с помощью крючка имеет множество преимуществ. Это помогает изменять данные и запускать анимации на основе текущего значения. Мы можем получить доступ и изменить общую ценность с помощью этого свойства. Мы создадим объект для масштабирования начального значения и анимации перехода при масштабировании изображения стикера. Чтобы определить количество требуемых отжиманий, добавим useSharedValue() .value doubleTapGesture.Tap() numberOfTaps()

Создайте следующий объект в компоненте:

```
const doubleTap = Gesture.Tap()
  .numberOfTaps(2)
  .onStart(() => {
    if (scaleImage.value !== imageSize * 2) {
      scaleImage.value = scaleImage.value * 2;
    } else {
      scaleImage.value = Math.round(scaleImage.value / 2);
    }
  });
```

### Жест понорамы

Чтобы распознать жест перетаскивания на наклейке и отслеживать его движение, мы используем жест панорамы. В src/components/emoji-sticker.tsx:

1. Создайте две новые общие ценности: translateX и translateY.
2. Замените их на компонент Animated.View 

```
export default function EmojiSticker({ imageSize, stickerSource }: Props) {
  const scaleImage = useSharedValue(imageSize);
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);
  // ...rest of the code remains same

  return (
    <Animated.View style={{ top: -350 }}>
      <GestureDetector gesture={doubleTap}>
        {/* ...rest of the code remains same */}
      </GestureDetector>
    </Animated.View>
  );
}

```

Давайте узнаем, что делает вышеуказанный код:

- Определённые значения перевода будут перемещать стикер по экрану. Поскольку наклейка движется по обеим осям, нужно отслеживать значения X и Y.
- В крючках мы установили обе переменные трансляции так, чтобы они имели начальное положение . Это начальное положение наклейки и отправная точка. Это значение задаёт начальное положение стикера при начале жеста.useSharedValue()0

На предыдущем этапе мы активировали обратный вызов для жеста tap, привязанного к методу. Для жеста панорамирования укажите обратный вызов, который выполняется, когда жест активен и движется.onStart()Gesture.Tap()onChange()

1. Создайте объект, который будет обрабатывать жест панорамирования. Обратный вызов принимается как параметр. и свойства сохраняют изменение положения с момента последнего события и обновляют значения, хранящиеся в и .dragonChange()eventchangeXchangeYtranslateXtranslateY
1. Определите объект с помощью крючка containerStyleuseAnimatedStyle(). Он вернёт массив преобразований. Для компонента нужно установить свойство значения translateX и translateY. Это меняет положение наклейки, когда жест активен.

```
const drag = Gesture.Pan().onChange(event => {
  translateX.value += event.changeX;
  translateY.value += event.changeY;
});

const containerStyle = useAnimatedStyle(() => {
  return {
    transform: [
      {
        translateX: translateX.value,
      },
      {
        translateY: translateY.value,
      },
    ],
  };
});

```

Далее, внутри кода JSX:

1. Обновите компонент так, чтобы он стал компонентом верхнего уровня.
2. Добавьте на компонент, чтобы применить стили трансформации.containerStyle

```
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
import { ImageSourcePropType } from 'react-native';

type Props = {
  imageSize: number;
  stickerSource: ImageSourcePropType;
};

export default function EmojiSticker({ imageSize, stickerSource }: Props) {
  const scaleImage = useSharedValue(imageSize);
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);

  const doubleTap = Gesture.Tap()
    .numberOfTaps(2)
    .onStart(() => {
      if (scaleImage.value !== imageSize * 2) {
        scaleImage.value = scaleImage.value * 2;
      } else {
        scaleImage.value = Math.round(scaleImage.value / 2);
      }
    });

  const imageStyle = useAnimatedStyle(() => {
    return {
      width: withSpring(scaleImage.value),
      height: withSpring(scaleImage.value),
    };
  });

  const drag = Gesture.Pan().onChange(event => {
    translateX.value += event.changeX;
    translateY.value += event.changeY;
  });

  const containerStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: translateX.value,
        },
        {
          translateY: translateY.value,
        },
      ],
    };
  });

  return (
    <GestureDetector gesture={drag}>
      <Animated.View style={[containerStyle, { top: -350 }]}>
        <GestureDetector gesture={doubleTap}>
          <Animated.Image
            source={stickerSource}
            resizeMode="contain"
            style={[{ width: imageSize, height: imageSize }, imageStyle]}
          />
        </GestureDetector>
      </Animated.View>
    </GestureDetector>
  );
}

```

# Скриншоты

Для установки и запустите следующие команды:

```
expo install react-native-view-shot expo-media-library
```

### Запрос разрешения

Приложение, требующее конфиденциальной информации, например, доступ к медиатеке устройства, должно запросить разрешение на разрешение или отказ в доступе. Используя hook from , мы можем использовать разрешение и метод для запроса доступа. Этот крючок запрашивает как разрешения на чтение, так и на запись, что включает выбор изображений из библиотеки и сохранение скриншотов в неё.

Когда приложение загружается впервые, и статус разрешения не предоставлен и не отклонён, значение этого приложения равно permissionResponsenull. При запросе разрешения пользователь может либо предоставить разрешение, либо отказать в нём. Мы можем добавить условие .requestPermission(), чтобы проверить, если оно не исполняется. Если не разрешено, активируйте метод. После получения доступа значение изменяется на permissionResponsegranted

Добавьте следующий фрагмент кода внутри src/app/(tabs)/index.tsx:

```
import { useEffect, useState } from 'react';
import * as ImagePicker from 'expo-image-picker';

// ...rest of the code remains same

export default function Index() {
  const [permissionResponse, requestPermission] = ImagePicker.useMediaLibraryPermissions();
  // ...rest of the code remains same

  useEffect(() => {
    if (!permissionResponse?.granted) {
      requestPermission();
    }
  }, []);

  // ...rest of the code remains same
}

```

### Создание ссылки для сохранения текущего вида

Мы используем его, чтобы пользователь мог сделать скриншот внутри приложения. Эта библиотека запечатлевает скриншот изображения с помощью этого метода. Он возвращает URI файла с изображением скриншота.react-native-view-shot<View>captureRef()

1. Импортируйте из React и обратно. (captureRef react-native-view-shot useRef)
2. Создайте эталонную переменную для хранения ссылки на запечатлено изображение скриншота. imageRef
3. Оберните компоненты ImageViewer и EmojiSticker внутри View и затем передайте ей опорную переменную. 

```
import { useState, useRef } from 'react';
import { captureRef } from 'react-native-view-shot';

export default function Index() {
   const imageRef = useRef<View>(null);

  // ...rest of the code remains same

  return (
    <GestureHandlerRootView style={styles.container}>
      <View style={styles.imageContainer}>
        <View ref={imageRef} collapsable={false}>
          <ImageViewer imgSource={PlaceholderImage} selectedImage={selectedImage} />
          {pickedEmoji && <EmojiSticker imageSize={40} stickerSource={pickedEmoji} />}
        </View>
      </View>
      {/* ...rest of the code remains same */}
    </GestureHandlerRootView>
  );
}
```

В приведённом выше фрагменте реквизит установлен на . Это позволяет компоненту делать скриншоты только фонового изображения и наклейки эмодзи.

### Сохранение скриншота

Мы можем сделать скриншот представления, вызвав метод captureRef() изнутри функции onSaveImageAsync(). Он принимает опциональный аргумент, при котором мы можем передать и области для захвата скриншотов. 

Метод также возвращает обещание, которое выполняет URI скриншота. Мы передадим этот URI в качестве параметра captureRef() MediaLibrary.saveToLibraryAsync() и сохранить скриншот в медиабиблиотеке устройства.

Внутри src/app/(tabs)/index.tsx обновите функцию onSaveImageAsync() следующим кодом:

```
import * as ImagePicker from 'expo-image-picker';
import * as MediaLibrary from 'expo-media-library';
import { useEffect, useRef, useState } from 'react';
import { ImageSourcePropType, StyleSheet, View } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { captureRef } from 'react-native-view-shot';

import Button from '@/components/button';
import CircleButton from '@/components/circle-button';
import EmojiList from '@/components/emoji-list';
import EmojiPicker from '@/components/emoji-picker';
import IconButton from '@/components/icon-button';
import ImageViewer from '@/components/image-viewer';

import EmojiSticker from '@/components/emoji-sticker';

const PlaceholderImage = require('@/assets/images/background-image.png');

export default function Index() {
  const [selectedImage, setSelectedImage] = useState<string | undefined>(
    undefined
  );
  const [showAppOptions, setShowAppOptions] = useState<boolean>(false);
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [pickedEmoji, setPickedEmoji] = useState<
    ImageSourcePropType | undefined
  >(undefined);
  const [permissionResponse, requestPermission] = ImagePicker.useMediaLibraryPermissions();
  const imageRef = useRef<View>(null);

  useEffect(() => {
    if (!permissionResponse?.granted) {
      requestPermission();
    }
  }, []);

  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images'],
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
      setShowAppOptions(true);
    } else {
      alert('You did not select any image.');
    }
  };

  const onReset = () => {
    setShowAppOptions(false);
  };

  const onAddSticker = () => {
    setIsModalVisible(true);
  };

  const onModalClose = () => {
    setIsModalVisible(false);
  };

  const onSaveImageAsync = async () => {
    try {
      const localUri = await captureRef(imageRef, {
        height: 440,
        quality: 1,
      });

      await MediaLibrary.saveToLibraryAsync(localUri);
      if (localUri) {
        alert('Saved!');
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <GestureHandlerRootView style={styles.container}>
      <View style={styles.imageContainer}>
        <View ref={imageRef} collapsable={false}>
          <ImageViewer imgSource={PlaceholderImage} selectedImage={selectedImage} />
          {pickedEmoji && <EmojiSticker imageSize={40} stickerSource={pickedEmoji} />}
        </View>
      </View>
      {showAppOptions ? (
        <View style={styles.optionsContainer}>
          <View style={styles.optionsRow}>
            <IconButton icon="refresh" label="Reset" onPress={onReset} />
            <CircleButton onPress={onAddSticker} />
            <IconButton icon="save-alt" label="Save" onPress={onSaveImageAsync} />
          </View>
        </View>
      ) : (
        <View style={styles.footerContainer}>
          <Button theme="primary" label="Choose a photo" onPress={pickImageAsync} />
          <Button label="Use this photo" onPress={() => setShowAppOptions(true)} />
        </View>
      )}
      <EmojiPicker isVisible={isModalVisible} onClose={onModalClose}>
        <EmojiList onSelect={setPickedEmoji} onCloseModal={onModalClose} />
      </EmojiPicker>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
  },
  imageContainer: {
    flex: 1,
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: 'center',
  },
  optionsContainer: {
    position: 'absolute',
    bottom: 80,
  },
  optionsRow: {
    alignItems: 'center',
    flexDirection: 'row',
  },
});

```

Чтобы сделать скриншот в интернете и сохранить его как изображение, мы используем стороннюю библиотеку под названием dom-to-image. Он делает скриншот любого узла DOM и превращает его в векторное (SVG) или растровое (PNG или JPEG) изображение.

```
install dom-to-image
```

После установки обязательно перезагрузите сервер разработки и нажмите в терминале клавишу W

### Добавление кода, специфичный для платформы

Используя модуль из React Native, мы можем реализовать поведение, специфичное для платформы. Внутри src/app/(tabs)/index.tsx:Platform

1. Импортируйте модуль из react-native
2. Импортируйте библиотеку из dom-to-image
3. Обновите функцию onSaveImageAsync(), чтобы проверить, связана ли текущая платформа с этим свойством. Если это так, мы используем метод domtoimage.toJpeg() для преобразования и захвата тока в формате JPEG-изображения. В противном случае мы продолжим использовать ту же логику, что и для нативных платформ.

```
import * as ImagePicker from 'expo-image-picker';
import * as MediaLibrary from 'expo-media-library';
import { useEffect, useRef, useState } from 'react';
import { ImageSourcePropType, View, StyleSheet, Platform } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { captureRef } from 'react-native-view-shot';
import domtoimage from 'dom-to-image';

import Button from '@/components/button';
import ImageViewer from '@/components/image-viewer';
import IconButton from '@/components/icon-button';
import CircleButton from '@/components/circle-button';
import EmojiPicker from '@/components/emoji-picker';
import EmojiList from '@/components/emoji-list';
import EmojiSticker from '@/components/emoji-sticker';

const PlaceholderImage = require('@/assets/images/background-image.png');

export default function Index() {
  const [selectedImage, setSelectedImage] = useState<string | undefined>(undefined);
  const [showAppOptions, setShowAppOptions] = useState<boolean>(false);
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [pickedEmoji, setPickedEmoji] = useState<ImageSourcePropType | undefined>(undefined);
  const [permissionResponse, requestPermission] = ImagePicker.useMediaLibraryPermissions();
  const imageRef = useRef<View>(null);

  useEffect(() => {
    if (!permissionResponse?.granted) {
      requestPermission();
    }
  }, []);

  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images'],
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
      setShowAppOptions(true);
    } else {
      alert('You did not select any image.');
    }
  };

  const onReset = () => {
    setShowAppOptions(false);
  };

  const onAddSticker = () => {
    setIsModalVisible(true);
  };

  const onModalClose = () => {
    setIsModalVisible(false);
  };

  const onSaveImageAsync = async () => {
    if (Platform.OS !== 'web') {
      try {
        const localUri = await captureRef(imageRef, {
          height: 440,
          quality: 1,
        });

        await MediaLibrary.saveToLibraryAsync(localUri);
        if (localUri) {
          alert('Saved!');
        }
      } catch (e) {
        console.log(e);
      }
    } else {
      try {
        const dataUrl = await domtoimage.toJpeg(imageRef.current, {
          quality: 0.95,
          width: 320,
          height: 440,
        });

        let link = document.createElement('a');
        link.download = 'sticker-smash.jpeg';
        link.href = dataUrl;
        link.click();
      } catch (e) {
        console.log(e);
      }
    }
  };

  return (
    <GestureHandlerRootView style={styles.container}>
      <View style={styles.imageContainer}>
        <View ref={imageRef} collapsable={false}>
          <ImageViewer imgSource={PlaceholderImage} selectedImage={selectedImage} />
          {pickedEmoji && <EmojiSticker imageSize={40} stickerSource={pickedEmoji} />}
        </View>
      </View>
      {showAppOptions ? (
        <View style={styles.optionsContainer}>
          <View style={styles.optionsRow}>
            <IconButton icon="refresh" label="Reset" onPress={onReset} />
            <CircleButton onPress={onAddSticker} />
            <IconButton icon="save-alt" label="Save" onPress={onSaveImageAsync} />
          </View>
        </View>
      ) : (
        <View style={styles.footerContainer}>
          <Button theme="primary" label="Choose a photo" onPress={pickImageAsync} />
          <Button label="Use this photo" onPress={() => setShowAppOptions(true)} />
        </View>
      )}
      <EmojiPicker isVisible={isModalVisible} onClose={onModalClose}>
        <EmojiList onSelect={setPickedEmoji} onCloseModal={onModalClose} />
      </EmojiPicker>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
  },
  imageContainer: {
    flex: 1,
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: 'center',
  },
  optionsContainer: {
    position: 'absolute',
    bottom: 80,
  },
  optionsRow: {
    alignItems: 'center',
    flexDirection: 'row',
  },
});

```