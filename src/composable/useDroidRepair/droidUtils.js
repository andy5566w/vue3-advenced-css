export const addDroid = (currentDroids, remainingDroids) => {
  const randomIndex = Math.floor(Math.random() * remainingDroids.length)
  const newDroid = remainingDroids[randomIndex]
  return [...currentDroids, newDroid]
}

export const toggleDroidSelection = (currentSelection, droidToToggle) => {
  return currentSelection?.id === droidToToggle.id ? null : droidToToggle
}

export const filterAndSortDroids = (droids, searchTerm) => {
  return droids.filter((droid) => {
    return (
      droid.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
      droid.status.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })
}
