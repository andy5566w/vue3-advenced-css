export const getRadianAndAngle = (startPoint, endPoint) => {
  const { x: x1, y: y1 } = startPoint
  const { x: x2, y: y2 } = endPoint
  // y1 - y2 because coordinates base on four dimension
  const delta = { x: x2 - x1, y: y1 - y2 }
  const radian = Math.atan2(delta.y, delta.x)
  const _ang = (radian * 180) / Math.PI
  const angle = _ang < -90 ? 360 + _ang : _ang
  return { radian, angle }
}

export const checkDimension = (radian) => {
  let dimension = -1
  if (0 < radian && radian <= Math.PI / 2) {
    dimension = 1
  } else if (Math.PI / 2 < radian && radian <= Math.PI) {
    dimension = 2
  } else if (-Math.PI < radian && radian <= -Math.PI / 2) {
    dimension = 3
  } else if (-Math.PI / 2 < radian && radian <= 0) {
    dimension = 4
  }
  return dimension
}

export const getTwoPointDistance = (startPoint, endPoint) => {
  const { x: x1, y: y1 } = startPoint
  const { x: x2, y: y2 } = endPoint
  const delta = { x: x2 - x1, y: y2 - y1 }
  return Math.sqrt(Math.pow(delta.x, 2) + Math.pow(delta.y, 2))
}
