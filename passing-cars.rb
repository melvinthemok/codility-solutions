# O(n) complexity

def solution(a)
  zeros = 0
  result = 0
  a.each do |i|
    zeros += 1 if i == 0
    result += zeros if i == 1
  end
result > 1000000000 ? -1 : result
end

puts solution([0, 1, 0, 1, 1])
