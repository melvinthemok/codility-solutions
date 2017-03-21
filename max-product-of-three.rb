def solution(a)
  a.sort!
  n = a.size
  return [ a[0]*a[1]*a[n-1], a[n-3]*a[n-2]*a[n-1] ].max
end

puts solution [-3, 1, 2, 6, -4, 5]
puts solution [-4, 2, 0, -5, 3, 1]
