// The Context class that uses a strategy
class ShippingCalculator {
    setStrategy(strategy) {
        this.strategy = strategy;
    }

    calculate(packageDetails) {
        return this.strategy.calculate(packageDetails);
    }
}

class ShippingStrategy {
    calculate(packageDetails) {
        throw new Error("This method should be overridden!");
    }
}

class FlatRateStrategy extends ShippingStrategy {
    calculate(packageDetails) {
        return 10;
    }
}

class WeightBasedStrategy extends ShippingStrategy {
    calculate(packageDetails) {
        return packageDetails.weight * 3;
    }
}

export { ShippingCalculator, FlatRateStrategy, WeightBasedStrategy };