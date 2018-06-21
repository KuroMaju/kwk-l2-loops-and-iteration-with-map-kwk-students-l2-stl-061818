// Code your solution in this file.
let names = ['Adele', 'Beyoncé', 'Lady', 'Madonna', 'Rihanna', 'Taylor']

function lowerCaseStudentNames(list) {
  return list.map(function (name) {
    return name.toLowerCase();
  });
}