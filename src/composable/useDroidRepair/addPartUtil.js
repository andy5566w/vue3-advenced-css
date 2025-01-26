export const addPart = (parts, allParts) => {
  const randomIndex = Math.floor(Math.random() * allParts.length)
  const randomPart = allParts[randomIndex]
  const updatedParts = [...parts]

  const matchingPartIndex = updatedParts.findIndex(
    (p) => p.name === randomPart.name
  )
  if (matchingPartIndex !== -1) {
    updatedParts[matchingPartIndex] = {
      ...updatedParts[matchingPartIndex],
      quantity: updatedParts[matchingPartIndex].quantity + 1,
      added: true,
    }
  } else {
    updatedParts.push({ ...randomPart, added: true })
  }

  return updatedParts
}

export const filterAndSortParts = (parts, searchTerm) => {
  return parts.filter((part) =>
    part.name.toLowerCase().includes(searchTerm.toLowerCase())
  )
}

export const calculateMissingParts = (selectedDroid, parts) => {
  if (!selectedDroid.value || parts.value) {
    return []
  }

  return selectedDroid.value.partsNeeded.filter((part) => {
    const matchingPart = parts.find((p) => p.name === part)
    return !matchingPart || matchingPart.quantity === 0
  })
}
