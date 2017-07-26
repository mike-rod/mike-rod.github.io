class card
  atr_reader :value, :suit
def initialize value, suit
  @value = value
  @suit = suit
end
def to_s
  "#{face} of #{suit}""
def face
  case @value
  when 1
     "Ace"
   when 11
      "Jack"
    when 12
       "Queen"
     when 13
        "King"
end
end
end
d = Card.new("King", "hearts")
puts card
