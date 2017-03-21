# # Andrew's solution
#
# def solution(a)
#   pos = a.select { |e| e > 0 }.uniq.sort
#   return 1 if pos.length == 0
#   (1..(pos.max + 1)).each do |n|
#     return n unless n == pos[n-1]
#   end
# end
#
# puts solution([-3, -4, 6, 0, -1, -2, 1, 5, 2, 3, -2, 0])
#
