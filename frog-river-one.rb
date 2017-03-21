# # Adrian's solution
#
# def solution (x, a)
#   hash = {}
#   leafsum = 0
#   x.times do |n|
#     hash[n+1] = 1
#     leafsum += n+1
#   end
#   a.each_with_index do |leaf, index|
#     leafsum -= leaf if hash[leaf] == 1
#     return index if leafsum == 0
#     hash[leaf] = 0
#   end
#   -1
# end
#
# puts solution(5, [4, 5, 3, 3, 5, 1, 1, 4, 2, 4, 5])
#
# # Yi Sheng's solution
#
# def solution(x, a)
#   step = {}
#   a.each_with_index do |item, i|
#     step[item] = true
#     return i if step.size ==x
#   end
#   -1
# end
#
