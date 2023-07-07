const prompt_male =
  'Formuliere den fogenden Satz so, dass aus "Ich" und "Wir" die männliche Person singular "Er" wird. Alle anderen personenbezogenen Wörter, die nicht auf die Ich-Person bezogen sind, werden in der gender-neutraler Form geschrieben.'
const prompt_female =
  'Formuliere den fogenden Satz so, dass aus "Ich" und "Wir" die weibliche Person singular "Sie" wird. Alle anderen personenbezogenen Wörter, die nicht auf die Ich-Person bezogen sind, werden in der gender-neutraler Form geschrieben.'
const prompt_me_female =
  'Formuliere den fogenden Satz so, dass die Ich-Person mit einer weiblichen Person {Name} ersetzt wird und alle anderen personenbezogenen Wörter in gender-neutraler Form '

const { Configuration, OpenAIApi } = require('openai')
const fs = require('fs')
let questionsArray
try {
  const questions = fs.readFileSync(
    './packages/frontend/src/assets/questions/i_male_de.txt',
    'utf8'
  )
  questionsArray = questions.split('\n').filter((q) => q !== '')
} catch (err) {
  console.error(err)
}

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY
})
const openai = new OpenAIApi(configuration)

async function transform(prompt, message) {
  try {
    const chatCompletion = await openai.createChatCompletion({
      model: 'gpt-3.5-turbo',
      temperature: 0,
      messages: [
        {
          role: 'system',
          content: prompt
        },
        { role: 'user', content: message }
      ]
    })
    return chatCompletion.data.choices[0].message.content
  } catch (e) {
    console.error('ERROR happened white transformation', e.message)
    process.exit()
  }
}

async function run() {
  var file = fs.createWriteStream('./packages/frontend/src/assets/questions/name_female_de.txt', {
    flags: 'a'
  })
  file.on('error', (err) => console.error('ERROR:', err))

  for (let i = 0; i <= questionsArray.length; i++) {
    const q = questionsArray[i]
    const newText = (await transform(prompt_female, q))
      .replace(/(Sie )|( sie )/, ' {name} ')
      .trim()
      .replace(/\s\s+/g, ' ')
    file.write(newText + '\n')
    console.log(i + 1, newText)
  }
  file.end()
}

run()
