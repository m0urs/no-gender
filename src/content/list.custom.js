(function (global) {
  global.noGender = global.noGender || {}

  const APP = global.noGender

  /* list of plural terms */
  APP.listCustom = [
    /**
     * Custom replace objects
     */
    { regExp: /jede[:*_]r/, replace: 'jeder' },
    { regExp: /ein[:*_]e/, replace: 'ein' },
    { regExp: /Rom\*nja/, replace: 'Roma' },
    { regExp: /Sinti\*zze/, replace: 'Sinti' },
    { regExp: /Sint\*ezza/, replace: 'Sinti' },
    { regExp: /Studentys/, replace: 'Studenten' },
    { regExp: /Studierende/, replace: 'Studenten' },
    { regExp: /Mitarbeitys/, replace: 'Mitarbeiter' },
    { regExp: /Mitarbeitenden/, replace: 'Mitarbeiter' },
    { regExp: /Mitarbeitende/, replace: 'Mitarbeiter' },
    { regExp: /Forschenden/, replace: 'Forscher' },
    { regExp: /Forschende/, replace: 'Forscher' },
  ]
}(typeof window !== 'undefined' ? window : this))
