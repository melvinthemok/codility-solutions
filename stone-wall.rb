# def solution (h)
#   result = 0
#   a = Array.new
#   (0..h).each do |i|
#     while !a.empty? && a.pop > i
#       a.pop!
#     end
#     if a.empty? || a.pop < i
#       a.push(i)
#       result++
#     end
#   end
#   return result
# end
#
# h = [8, 8, 5, 7, 9, 8, 7, 4, 8]
# puts solution(h)
