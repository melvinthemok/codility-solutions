# def solution (a)
#   a.sort.reverse!
#   x = y = z = 0
#   i = 0
#   while i < a.size
#     result = 0
#     x, y, z = i, x, y
#     if x + y > z && x + z > y && y + z > x
#       result = 1
#     end
#     i += 1
#   end
#   return result
# end
# def solution (a)
#   if a.size < 3
#     return 0
#   else
#     a.sort.reverse!
#     i = 0
#     while i < a.size - 2
#       result = 0
#       if a[i] + a[i+1] < a[i+2] &&
#          a[i] + a[i+2] < a[i+1] &&
#          a[i+1] + a[i+2] < a[i]
#         result = 1
#       end
#       i += 1
#     end
#     return result
#   end
# end
#
# puts solution([10, 2, 5, 1, 8, 20])
