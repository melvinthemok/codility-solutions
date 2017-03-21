def solution (s)
  return 1 if s.length == 0
  a = Array.new

  (0..(s.length - 1)).each do |i|
    j = s[i]
    # why is this necessary
    if j == '{' || j == '[' || j == '('
      a << j
    else
      k = a.pop
      # why is this necessary
      if k == '{' && j == '}'
      elsif k == '[' && j == ']'
      elsif k == '(' && j == ')'
      else
        return 0
      end
    end
  end
  a.empty? ? 1 : 0
end

puts solution('([{}{}])')
