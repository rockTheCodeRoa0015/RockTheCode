import './Hero.css'
import { Ul } from '../Ul/Ul'
import { InputSearch } from '../InputSearch/InputSearch'
import data from '../../../data/data'

export const Main = (parentNode) => {
  const main = document.createElement('main')
  main.classList.add('hero')
  parentNode.appendChild(main)
  SectionAboutMe(main)
}

const SectionAboutMe = (parentNode) => {
  clearMain(parentNode)
  const section = document.createElement('section')
  section.classList.add('flex-container', 'aboutme')

  const h2 = document.createElement('h2')
  const divProfile = document.createElement('div')
  const divInfo = document.createElement('div')
  const imgProfile = document.createElement('img')
  const p = document.createElement('p')
  const divContact = document.createElement('div')
  const imgMail = document.createElement('img')
  const imgLinkedin = document.createElement('img')
  const imgGithub = document.createElement('img')
  const aMail = document.createElement('a')
  const aLinkedin = document.createElement('a')
  const aGithub = document.createElement('a')

  h2.textContent = 'Sobre mi'
  imgProfile.src = data.avatar
  p.textContent = data.aboutMe
  aMail.href = 'mailto:' + data.email
  imgMail.src = './img/mail.png'
  imgMail.title = 'mail'
  aLinkedin.href = data.linkedin
  aLinkedin.target = '_blank'
  imgLinkedin.src = './img/linkedin.png'
  imgLinkedin.title = 'linkedin'
  aGithub.href = data.github
  aGithub.target = '_blank'
  imgGithub.src = './img/github.png'
  imgGithub.title = 'github'

  divProfile.classList.add('flex-container', 'aboutmeInfo')
  divInfo.classList.add('flex-container', 'profile')
  divContact.classList.add('flex-container', 'contact')

  divInfo.appendChild(imgProfile)
  divInfo.appendChild(p)
  aMail.appendChild(imgMail)
  aLinkedin.appendChild(imgLinkedin)
  aGithub.appendChild(imgGithub)
  divContact.appendChild(aMail)
  divContact.appendChild(aLinkedin)
  divContact.appendChild(aGithub)

  section.appendChild(h2)
  divProfile.appendChild(divInfo)
  divProfile.appendChild(divContact)
  section.appendChild(divProfile)
  parentNode.appendChild(section)
}

const SectionEducation = (parentNode) => {
  clearMain(parentNode)
  const section = document.createElement('section')
  section.classList.add('flex-container', 'education')

  const h2 = document.createElement('h2')
  const div = document.createElement('div')
  const h3 = document.createElement('h3')
  const h4School = document.createElement('h4')
  const pYear = document.createElement('p')
  const h4Courses = document.createElement('h4')
  const h4Skils = document.createElement('h4')
  const divSearch = document.createElement('div')
  const p = document.createElement('p')

  h2.textContent = 'Estudios'
  h3.textContent = data.education.degree
  h4School.textContent = data.education.university
  pYear.textContent = data.education.graduationYear
  h4Courses.textContent = 'Cursos Relevantes'
  h4Skils.textContent = 'Skills'

  div.classList.add('flex-container', 'educationInfo')
  divSearch.classList.add('searchSkill')
  p.classList.add('pSkill')

  let arrayCourses = []
  for (const course of data.education.relevantCourses) {
    arrayCourses.push(course)
  }

  let arraySkills = []
  for (const skill of data.skills) {
    arraySkills.push(skill)
  }

  section.appendChild(h2)
  div.appendChild(h3)
  div.appendChild(h4School)
  div.appendChild(pYear)
  div.appendChild(h4Courses)
  Ul(div, arrayCourses, false, 'cursos')
  div.appendChild(h4Skils)
  InputSearch(divSearch, 'Buscar Skill', 'L')
  div.appendChild(divSearch)
  div.appendChild(p)
  Ul(div, arraySkills, false, 'skill')
  section.appendChild(div)

  parentNode.appendChild(section)
}

const SectionExperience = (parentNode) => {
  clearMain(parentNode)
  const section = document.createElement('section')
  section.classList.add('flex-container', 'experience')

  const h2 = document.createElement('h2')
  h2.textContent = 'Experiencia'
  section.appendChild(h2)

  for (const experience of data.workExperience) {
    const div = document.createElement('div')
    const h3 = document.createElement('h3')
    const h4company = document.createElement('h4')
    const h4position = document.createElement('h4')
    const p = document.createElement('p')
    const h4Client = document.createElement('h4')

    h3.textContent = experience.startDate + ' - ' + experience.endDate
    h4company.textContent = experience.company
    h4position.textContent = experience.position
    p.textContent = experience.description
    h4Client.textContent = 'Clientes - Proyectos:'

    div.classList.add('flex-container', 'work')
    div.appendChild(h3)
    div.appendChild(h4company)
    div.appendChild(h4position)
    div.appendChild(p)
    div.appendChild(h4Client)

    for (const client of experience.client) {
      const divCli = document.createElement('div')
      const h5 = document.createElement('h5')
      const pCli = document.createElement('p')
      h5.textContent = client.name
      pCli.textContent = client.description
      divCli.classList.add('client')
      divCli.appendChild(h5)
      divCli.appendChild(pCli)
      div.appendChild(divCli)
    }
    section.appendChild(div)
  }

  parentNode.appendChild(section)
}

const SectionProjects = (parentNode) => {
  clearMain(parentNode)
  const section = document.createElement('section')
  section.classList.add('flex-container', 'projects')

  const h2 = document.createElement('h2')
  const div = document.createElement('div')
  h2.textContent = 'Proyectos'
  div.classList.add('flex-container')
  section.appendChild(h2)
  section.appendChild(div)

  for (const project of data.projects) {
    const article = document.createElement('article')
    article.classList.add('flex-container', 'project')
    const img = document.createElement('img')
    const h3 = document.createElement('h3')
    const p = document.createElement('p')
    const divA = document.createElement('div')
    const aApp = document.createElement('a')
    const aCode = document.createElement('a')

    img.src = project.preview
    h3.textContent = project.title
    p.textContent = project.description
    aApp.href = project.page
    aApp.textContent = 'Aplicación'
    aApp.target = '_blank'
    aCode.href = project.link
    aCode.textContent = '<Codigo>'
    aCode.target = '_blank'
    divA.classList.add('flex-container', 'links')
    article.appendChild(img)
    article.appendChild(h3)
    article.appendChild(p)
    divA.appendChild(aApp)
    divA.appendChild(aCode)
    article.appendChild(divA)
    div.appendChild(article)
  }

  parentNode.appendChild(section)
}

const clearMain = (parentNode) => {
  if (parentNode.hasChildNodes()) {
    const section = parentNode.querySelector('section')
    parentNode.removeChild(section)
  }
}

export const chargeSection = (section) => {
  console.log(section)
  const main = document.querySelector('.hero')
  switch (section) {
    case 'Sobre mi':
      document.querySelector('.infoMenu').classList.remove('infoMenu-show')
      SectionAboutMe(main)
      break
    case 'Estudios':
      document.querySelector('.infoMenu').classList.remove('infoMenu-show')
      SectionEducation(main)
      break
    case 'Experiencia':
      document.querySelector('.infoMenu').classList.remove('infoMenu-show')
      SectionExperience(main)
      break
    case 'Proyectos':
      document.querySelector('.infoMenu').classList.remove('infoMenu-show')
      SectionProjects(main)
      break
    default:
      document.querySelector('.infoMenu').classList.remove('infoMenu-show')
      SectionAboutMe(main)
      break
  }
}

export const searchSkill = (skill) => {
  let arraySkills = []
  for (const skill of data.skills) {
    arraySkills.push(skill.toLowerCase())
  }

  if (arraySkills.find((skills) => skills === skill.toLowerCase())) {
    let index = arraySkills.indexOf(skill)
    const liSkill = document.getElementById('skill' + index)
    liSkill.classList.toggle('liSkill-show')
    setTimeout(() => {
      liSkill.classList.toggle('liSkill-show')
    }, '3000')
  } else {
    const p = document.querySelector('.pSkill')
    p.textContent = 'Skill por adquirir'
    p.classList.toggle('pSkill-show')
    setTimeout(() => {
      p.classList.toggle('pSkill-show')
    }, '3000')
  }
}
