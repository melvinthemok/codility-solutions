# # O(b - a) complexity
#
# def solution(a, b, k)
#   i = a
#   count = 0
#   while i <= b do
#     if i % k == 0
#       count += 1
#     end
#     i += 1
#   end
#   return count
# end
#
# puts solution(1, 9, 3)
#
# O(1) complexity

def solution(a, b, k)
  return b / k - a / k + (a % k == 0 ? 1 : 0)
end

puts solution(1, 9, 3)
