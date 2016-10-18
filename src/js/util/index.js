export const blankReg = /[\r\n\s]+/g

export const showError = msg => {
  alert(msg)
}

export const showCheckError = vm => {
  const {field, message} = vm.error
  showError(message)
  if (vm.$refs[field] && vm.$refs[field].focus) {
    vm.$refs[field].focus()
  }
}
