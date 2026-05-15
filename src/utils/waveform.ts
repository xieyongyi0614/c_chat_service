export function encodeWaveform(waveform: number[]): Uint8Array {
  if (!waveform.length) {
    return new Uint8Array();
  }

  const bitCount = waveform.length * 5;

  const byteCount = Math.ceil(bitCount / 8);

  const result = new Uint8Array(byteCount);

  for (let i = 0; i < waveform.length; i++) {
    // 保证只取低 5 bit
    const value = waveform[i] & 0x1f;

    const bitIndex = i * 5;

    const byteIndex = Math.floor(bitIndex / 8);

    const bitShift = bitIndex % 8;

    // 写入当前 byte
    result[byteIndex] |= value << bitShift;

    // 如果跨 byte
    if (bitShift > 3) {
      result[byteIndex + 1] |= value >> (8 - bitShift);
    }
  }

  return result;
}

export function encodeWaveformToBase64(waveform: number[]) {
  const packed = encodeWaveform(waveform);
  return Buffer.from(packed).toString('base64');
}
