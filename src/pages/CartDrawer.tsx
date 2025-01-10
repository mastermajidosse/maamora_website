// Update the price display in CartDrawer.tsx
// Find and update these sections:

                          <div className="text-right">
                            <p className="font-medium">{formatPrice(totalPrice)} dhs</p>
                            {item.discount > 0 && (
                              <p className="text-sm text-gray-500 line-through">
                                {formatPrice(item.price * item.quantity)} dhs
                              </p>
                            )}
                          </div>

              <div className="flex justify-between text-lg font-semibold">
                <span>Total</span>
                <span>{formatPrice(state.total)} dhs</span>
              </div>