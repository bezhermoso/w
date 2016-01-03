require "enumerator"

module ChunkFilter
  def chunk(input, count)
    chunked = input.each_slice(count).to_a
    puts chunked.inspect
    chunked
  end
end

Liquid::Template.register_filter(ChunkFilter)
